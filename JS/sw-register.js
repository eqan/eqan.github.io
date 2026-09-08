(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;
  var hasControllerAtBoot = !!navigator.serviceWorker.controller;
  var userAcceptedUpdate = false;
  var updateToast = null;
  var updateWorker = null;
  var activeRegistration = null;
  var registrationPromise = null;
  var VERSION_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;
  var LAST_VERSION_CHECK_KEY = 'portfolio-sw-last-version-check';
  var PRIORITY_PROJECT_IMAGE_WARM_DELAY_MS = 250;
  var PROJECT_IMAGE_WARM_DELAY_MS = 2000;
  var TESTIMONIAL_IMAGE_WARM_DELAY_MS = 5000;

  function idle(callback, timeout) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: timeout || 4000 });
    } else {
      window.setTimeout(callback, timeout || 1800);
    }
  }

  function now() {
    return Date.now ? Date.now() : new Date().getTime();
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

  function assetUrl(target) {
    if (!target || !target.tagName) return '';

    if (target.tagName === 'IMG') return target.currentSrc || target.src || '';
    if (target.tagName === 'SCRIPT') return target.src || '';
    if (target.tagName === 'LINK' && /^(stylesheet|preload)$/i.test(target.rel || '')) return target.href || '';

    return '';
  }

  function toAbsoluteUrl(url) {
    try {
      return new URL(url, window.location.href).href;
    } catch (err) {
      return '';
    }
  }

  function getServiceWorkerTarget() {
    var controller = navigator.serviceWorker.controller;
    if (controller) return Promise.resolve(controller);

    if (activeRegistration) {
      return Promise.resolve(
        activeRegistration.active ||
        activeRegistration.waiting ||
        activeRegistration.installing ||
        null
      );
    }

    return navigator.serviceWorker.ready.then(function (registration) {
      activeRegistration = registration;
      return (
        navigator.serviceWorker.controller ||
        registration.active ||
        registration.waiting ||
        registration.installing ||
        null
      );
    }).catch(function () {
      return null;
    });
  }

  function cacheAsset(url) {
    if (!url || !isSameOrigin(url)) return Promise.resolve(false);

    return getServiceWorkerTarget().then(function (target) {
      if (!target || typeof target.postMessage !== 'function') return false;

      target.postMessage({
        type: 'CACHE_ASSET',
        url: url
      });

      return true;
    }).catch(function () {
      return false;
    });
  }

  function collectProjectImageUrls() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA) return [];

    var seen = {};
    var urls = [];

    function add(url) {
      var absoluteUrl = toAbsoluteUrl(url);
      if (!absoluteUrl || !isSameOrigin(absoluteUrl) || seen[absoluteUrl]) return;
      seen[absoluteUrl] = true;
      urls.push(absoluteUrl);
    }

    (PORTFOLIO_DATA.featuredProjects || []).forEach(function (project) {
      add(project && project.img);
    });

    (PORTFOLIO_DATA.projects || []).forEach(function (project) {
      add(project && project.img);
    });

    Object.keys(PORTFOLIO_DATA.projectModals || {}).forEach(function (key) {
      var modal = PORTFOLIO_DATA.projectModals[key];
      (modal && modal.images || []).forEach(function (image) {
        add(image && image.src);
      });
    });

    return urls;
  }

  function collectTestimonialImageUrls() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA) return [];

    var seen = {};
    var urls = [];

    function add(url) {
      var absoluteUrl = toAbsoluteUrl(url);
      if (!absoluteUrl || !isSameOrigin(absoluteUrl) || seen[absoluteUrl]) return;
      seen[absoluteUrl] = true;
      urls.push(absoluteUrl);
    }

    (PORTFOLIO_DATA.testimonials || []).forEach(function (testimonial) {
      add(testimonial && testimonial.img);
    });

    return urls;
  }

  function findPortfolioCacheName() {
    if (!window.caches || !window.caches.keys) return Promise.resolve('');

    return Promise.all([
      fetchDeployedCacheName(),
      caches.keys()
    ]).then(function (results) {
      var deployedCacheName = results[0];
      var cacheNames = results[1] || [];

      if (deployedCacheName && cacheNames.indexOf(deployedCacheName) !== -1) {
        return deployedCacheName;
      }

      return cacheNames.find(function (name) {
        return name === 'portfolio-static' || name.indexOf('portfolio-static-') === 0;
      }) || '';
    }).catch(function () {
      return '';
    });
  }

  function filterUncachedAssetUrls(cacheName, assetUrls) {
    if (!assetUrls.length || !window.caches) {
      return Promise.resolve(assetUrls);
    }

    if (!cacheName) {
      return Promise.resolve(assetUrls);
    }

    return caches.open(cacheName).then(function (cache) {
      return Promise.all(assetUrls.map(function (url) {
        return cache.match(url);
      })).then(function (matches) {
        return assetUrls.filter(function (_, index) {
          return !matches[index];
        });
      });
    }).catch(function () {
      return assetUrls;
    });
  }

  function warmAssetUrlsIfNeeded(assetUrls) {
    if (!assetUrls.length) return;

    findPortfolioCacheName().then(function (cacheName) {
      return filterUncachedAssetUrls(cacheName, assetUrls).then(function (uncachedAssetUrls) {
        if (!uncachedAssetUrls.length) return;

        uncachedAssetUrls.forEach(function (url) {
          cacheAsset(url);
        });
      });
    }).catch(function () {
      /* Background warming is an enhancement; ignore failures quietly. */
    });
  }

  function warmProjectImagesIfNeeded() {
    warmAssetUrlsIfNeeded(collectProjectImageUrls());
  }

  function warmTestimonialImagesIfNeeded() {
    warmAssetUrlsIfNeeded(collectTestimonialImageUrls());
  }

  function collectPriorityProjectImageUrls(limit) {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA) return [];

    var featuredProjects = PORTFOLIO_DATA.featuredProjects || [];

    return featuredProjects
      .slice(0, Math.max(0, limit || 0))
      .map(function (project) {
        return toAbsoluteUrl(project && project.img);
      })
      .filter(function (url, index, list) {
        return url && isSameOrigin(url) && list.indexOf(url) === index;
      });
  }

  function primeBrowserImageCache(urls) {
    if (!urls.length || !window.fetch) return Promise.resolve();

    return Promise.all(urls.map(function (url) {
      return fetch(url, {
        credentials: 'same-origin',
        cache: 'force-cache'
      }).then(function (response) {
        if (!response || !response.ok) return;
        return response.blob().catch(function () {});
      }).catch(function () {
        /* Best-effort browser-cache warmup only. */
      });
    })).then(function () {});
  }

  function fetchDeployedCacheName() {
    return fetch('./cache-version.json', {
      cache: 'no-store',
      credentials: 'same-origin'
    }).then(function (response) {
      if (!response.ok) return '';
      return response.json();
    }).then(function (data) {
      return data && data.cacheName ? data.cacheName : '';
    }).catch(function () {
      return '';
    });
  }

  function refreshWorkerIfNeeded(registration) {
    if (!window.caches || !registration) return;
    if (!shouldRefreshVersionMetadata()) return;

    fetchDeployedCacheName().then(function (deployedCacheName) {
      markVersionMetadataChecked();
      if (!deployedCacheName) return;

      return caches.keys().then(function (cacheNames) {
        if (cacheNames.indexOf(deployedCacheName) !== -1) return;

        /* A new cache name means a new service-worker.js should be deployed too.
           update() asks the browser to fetch it now instead of waiting. */
        return registration.update();
      });
    }).catch(function () {
      markVersionMetadataChecked();
    });
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

  function scheduleWarmups() {
    window.setTimeout(function () {
      var priorityProjectUrls = collectPriorityProjectImageUrls(2);
      primeBrowserImageCache(priorityProjectUrls);
      warmAssetUrlsIfNeeded(priorityProjectUrls);
    }, PRIORITY_PROJECT_IMAGE_WARM_DELAY_MS);

    window.setTimeout(function () {
      navigator.serviceWorker.ready.then(function (readyRegistration) {
        activeRegistration = readyRegistration;
        warmProjectImagesIfNeeded();
      }).catch(function () {
        /* Ignore warm-up failures; the page already loaded. */
      });
    }, PROJECT_IMAGE_WARM_DELAY_MS);

    window.setTimeout(function () {
      navigator.serviceWorker.ready.then(function (readyRegistration) {
        activeRegistration = readyRegistration;
        warmTestimonialImagesIfNeeded();
      }).catch(function () {
        /* Ignore warm-up failures; the page already loaded. */
      });
    }, TESTIMONIAL_IMAGE_WARM_DELAY_MS);
  }

  function registerServiceWorker() {
    if (registrationPromise) return registrationPromise;

    registrationPromise = navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' }).then(function (registration) {
      activeRegistration = registration;
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

  window.PortfolioCacheAsset = cacheAsset;
  reloadAfterAcceptedUpdate();

  document.addEventListener('load', function (event) {
    cacheAsset(assetUrl(event.target));
  }, true);

  idle(registerServiceWorker, 250);
  window.addEventListener('load', scheduleWarmups, { once: true });
})();
