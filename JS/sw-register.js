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

  window.PortfolioCacheAsset = cacheAsset;

  document.addEventListener('load', function (event) {
    cacheAsset(assetUrl(event.target));
  }, true);

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').catch(function () {
      /* Cache is an enhancement; the site should keep working if registration fails. */
    });
  });
})();
