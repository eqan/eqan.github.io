(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;

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

    fetchDeployedCacheName().then(function (deployedCacheName) {
      if (!deployedCacheName) return;

      return caches.keys().then(function (cacheNames) {
        if (cacheNames.indexOf(deployedCacheName) !== -1) return;

        /* A new cache name means a new service-worker.js should be deployed too.
           update() asks the browser to fetch it now instead of waiting. */
        return registration.update();
      });
    });
  }

  window.PortfolioCacheAsset = cacheAsset;

  document.addEventListener('load', function (event) {
    cacheAsset(assetUrl(event.target));
  }, true);

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
      return navigator.serviceWorker.ready.then(function () {
        refreshWorkerIfNeeded(registration);
      });
    }).catch(function () {
      /* Cache is an enhancement; the site should keep working if registration fails. */
    });
  });
})();
