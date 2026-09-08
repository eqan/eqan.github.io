(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;

  var CACHE_PREFIX = 'portfolio-static';
  var PROJECT_CARD_WARM_DELAY_MS = 250;
  var TESTIMONIAL_WARM_DELAY_MS = 5000;
  var VERSION_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;
  var LAST_VERSION_CHECK_KEY = 'portfolio-sw-last-version-check';

  var hasControllerAtBoot = !!navigator.serviceWorker.controller;
  var userAcceptedUpdate = false;
  var updateToast = null;
  var updateWorker = null;
  var registrationPromise = null;
  var cacheNamePromise = null;
  var warmupPromises = Object.create(null);

  function now() {
    return Date.now ? Date.now() : new Date().getTime();
  }

  function idle(callback, timeout) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: timeout || 3000 });
    } else {
      window.setTimeout(callback, timeout || 1200);
    }
  }

  function shouldRefreshVersionMetadata() {
    try {
      var last = Number(window.localStorage.getItem(LAST_VERSION_CHECK_KEY) || '0');
      return !last || (now() - last) > VERSION_CHECK_INTERVAL_MS;
    } catch (err) {
      return true;
    }
  }

  function markVersionMetadataChecked() {
    try {
      window.localStorage.setItem(LAST_VERSION_CHECK_KEY, String(now()));
    } catch (err) {}
  }

  function isSameOrigin(url) {
    try {
      return new URL(url, window.location.href).origin === window.location.origin;
    } catch (err) {
      return false;
    }
  }

  function toAbsoluteUrl(url) {
    try {
      return new URL(url, window.location.href).href;
    } catch (err) {
      return '';
    }
  }

  function assetUrl(target) {
    if (!target || !target.tagName) return '';

    if (target.tagName === 'IMG') return target.currentSrc || target.src || '';
    if (target.tagName === 'SCRIPT') return target.src || '';
    if (target.tagName === 'LINK' && /^(stylesheet|preload)$/i.test(target.rel || '')) return target.href || '';

    return '';
  }

  function getDeployedCacheName(force) {
    if (cacheNamePromise && !force) return cacheNamePromise;

    cacheNamePromise = fetch('./cache-version.json', {
      cache: 'no-store',
      credentials: 'same-origin'
    }).then(function (response) {
      if (!response.ok) return '';
      return response.json();
    }).then(function (data) {
      return data && data.cacheName ? String(data.cacheName).trim() : '';
    }).catch(function () {
      return '';
    });

    return cacheNamePromise;
  }

  function getPortfolioCacheName() {
    if (!window.caches || !window.caches.keys) return Promise.resolve(CACHE_PREFIX);

    return Promise.all([
      getDeployedCacheName(false),
      caches.keys()
    ]).then(function (results) {
      var deployedName = results[0];
      var cacheNames = results[1] || [];

      if (deployedName) return deployedName;

      return cacheNames.find(function (name) {
        return name === CACHE_PREFIX || name.indexOf(CACHE_PREFIX + '-') === 0;
      }) || CACHE_PREFIX;
    }).catch(function () {
      return CACHE_PREFIX;
    });
  }

  function openPortfolioCache() {
    if (!window.caches || !window.caches.open) return Promise.resolve(null);
    return getPortfolioCacheName().then(function (cacheName) {
      return caches.open(cacheName);
    }).catch(function () {
      return null;
    });
  }

  function uniqueSameOriginUrls(urls) {
    var seen = Object.create(null);

    return (urls || []).map(toAbsoluteUrl).filter(function (url) {
      if (!url || !isSameOrigin(url) || seen[url]) return false;
      seen[url] = true;
      return true;
    });
  }

  function collectAssetUrls(items, picker) {
    var urls = [];
    (items || []).forEach(function (item) {
      var value = picker(item);
      if (Array.isArray(value)) {
        value.forEach(function (url) { urls.push(url); });
        return;
      }
      urls.push(value);
    });
    return uniqueSameOriginUrls(urls);
  }

  function portfolioData() {
    return typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null;
  }

  function collectProjectCardImageUrls() {
    var data = portfolioData();
    if (!data) return [];
    return collectAssetUrls((data.featuredProjects || []).concat(data.projects || []), function (project) {
      return project && project.img;
    });
  }

  function collectTestimonialImageUrls() {
    var data = portfolioData();
    if (!data) return [];
    return collectAssetUrls(data.testimonials || [], function (testimonial) {
      return testimonial && testimonial.img;
    });
  }

  function fetchIntoCaches(url, cache) {
    if (warmupPromises[url]) return warmupPromises[url];

    warmupPromises[url] = Promise.resolve().then(function () {
      if (cache) {
        return cache.match(url).then(function (cached) {
          if (cached) return cached;
          return null;
        });
      }
      return null;
    }).then(function (cached) {
      if (cached) return cached;

      return fetch(url, {
        credentials: 'same-origin',
        cache: 'force-cache'
      }).then(function (response) {
        if (response && response.ok && cache) {
          cache.put(url, response.clone());
        }
        return response;
      });
    }).catch(function () {
      return null;
    }).finally(function () {
      delete warmupPromises[url];
    });

    return warmupPromises[url];
  }

  function warmAssetUrls(urls) {
    var dedupedUrls = uniqueSameOriginUrls(urls);
    if (!dedupedUrls.length) return Promise.resolve();

    return openPortfolioCache().then(function (cache) {
      return Promise.all(dedupedUrls.map(function (url) {
        return fetchIntoCaches(url, cache);
      }));
    }).then(function () {});
  }

  function cacheAsset(url) {
    return warmAssetUrls([url]);
  }

  function ensureUpdateToast() {
    if (updateToast) return updateToast;

    updateToast = document.createElement('div');
    updateToast.className = 'site-update-toast';
    updateToast.setAttribute('role', 'status');
    updateToast.setAttribute('aria-live', 'polite');
    updateToast.innerHTML = [
      '<div class="site-update-toast-copy">',
      '<strong>New website content is ready</strong>',
      '<span>Refresh when you are ready to view the latest version.</span>',
      '</div>',
      '<button class="site-update-toast-refresh" type="button">Refresh</button>',
      '<button class="site-update-toast-dismiss" type="button" aria-label="Dismiss update notice">&times;</button>'
    ].join('');

    updateToast.querySelector('.site-update-toast-refresh').addEventListener('click', function () {
      userAcceptedUpdate = true;
      updateToast.classList.remove('is-visible');

      if (updateWorker) {
        updateWorker.postMessage({ type: 'SKIP_WAITING' });
      } else {
        window.location.reload();
      }
    });

    updateToast.querySelector('.site-update-toast-dismiss').addEventListener('click', function () {
      updateToast.classList.remove('is-visible');
    });

    document.body.appendChild(updateToast);
    return updateToast;
  }

  function showUpdateToast(worker) {
    if (!hasControllerAtBoot) return;
    updateWorker = worker || updateWorker;
    ensureUpdateToast();
    window.setTimeout(function () {
      updateToast.classList.add('is-visible');
    }, 80);
  }

  function reloadAfterAcceptedUpdate() {
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!userAcceptedUpdate) return;
      window.location.reload();
    });
  }

  function watchForWaitingWorker(registration) {
    if (!registration) return;

    if (registration.waiting) {
      showUpdateToast(registration.waiting);
    }

    registration.addEventListener('updatefound', function () {
      var installingWorker = registration.installing;
      if (!installingWorker) return;

      installingWorker.addEventListener('statechange', function () {
        if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateToast(registration.waiting || installingWorker);
        }
      });
    });
  }

  function refreshWorkerIfNeeded(registration) {
    if (!window.caches || !registration) return;
    if (!shouldRefreshVersionMetadata()) return;

    getDeployedCacheName(true).then(function (deployedCacheName) {
      markVersionMetadataChecked();
      if (!deployedCacheName) return;

      return caches.keys().then(function (cacheNames) {
        if (cacheNames.indexOf(deployedCacheName) !== -1) return;
        return registration.update();
      });
    }).catch(function () {
      markVersionMetadataChecked();
    });
  }

  function registerServiceWorker() {
    if (registrationPromise) return registrationPromise;

    registrationPromise = navigator.serviceWorker.register('./service-worker.js', {
      updateViaCache: 'none'
    }).then(function (registration) {
      watchForWaitingWorker(registration);
      idle(function () {
        navigator.serviceWorker.ready.then(function () {
          refreshWorkerIfNeeded(registration);
        });
      }, 6000);
      return registration;
    }).catch(function () {
      return null;
    });

    return registrationPromise;
  }

  function scheduleWarmups() {
    window.setTimeout(function () {
      warmAssetUrls(collectProjectCardImageUrls());
    }, PROJECT_CARD_WARM_DELAY_MS);

    window.setTimeout(function () {
      warmAssetUrls(collectTestimonialImageUrls());
    }, TESTIMONIAL_WARM_DELAY_MS);
  }

  window.PortfolioCacheAsset = cacheAsset;
  reloadAfterAcceptedUpdate();
  registerServiceWorker();

  document.addEventListener('load', function (event) {
    cacheAsset(assetUrl(event.target));
  }, true);

  if (document.readyState === 'complete') {
    scheduleWarmups();
  } else {
    window.addEventListener('load', scheduleWarmups, { once: true });
  }
})();
