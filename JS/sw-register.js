(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;
  var hasControllerAtBoot = !!navigator.serviceWorker.controller;
  var hasReloadedForUpdate = false;
  var pendingControllerRefresh = false;
  var VERSION_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;
  var LAST_VERSION_CHECK_KEY = 'portfolio-sw-last-version-check';

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

  function cacheAsset(url) {
    var controller = navigator.serviceWorker.controller;
    if (!url || !controller || !isSameOrigin(url)) return;

    controller.postMessage({
      type: 'CACHE_ASSET',
      url: url
    });
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

  function flushPendingRefresh() {
    if (!pendingControllerRefresh || hasReloadedForUpdate) return;
    if (document.visibilityState !== 'hidden') return;
    hasReloadedForUpdate = true;
    pendingControllerRefresh = false;
    window.location.reload();
  }

  function reloadWhenNewWorkerTakesControl() {
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!hasControllerAtBoot || hasReloadedForUpdate) return;
      pendingControllerRefresh = true;
      flushPendingRefresh();
    });

    document.addEventListener('visibilitychange', flushPendingRefresh);
    window.addEventListener('pagehide', flushPendingRefresh);
  }

  window.PortfolioCacheAsset = cacheAsset;
  reloadWhenNewWorkerTakesControl();

  document.addEventListener('load', function (event) {
    cacheAsset(assetUrl(event.target));
  }, true);

  window.addEventListener('load', function () {
    idle(function () {
      navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' }).then(function (registration) {
        idle(function () {
          navigator.serviceWorker.ready.then(function () {
            refreshWorkerIfNeeded(registration);
          });
        }, 6000);
      }).catch(function () {
        /* Cache is an enhancement; the site should keep working if registration fails. */
      });
    }, 2500);
  });
})();
