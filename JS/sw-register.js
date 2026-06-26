(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').catch(function () {
      /* Cache is an enhancement; the site should keep working if registration fails. */
    });
  });
})();
