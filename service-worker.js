/* Portfolio asset cache.
   Keeps static CSS/JS/fonts/images on disk after first load while using
   network-first for documents so content updates are not hidden by cache. */
(function () {
  'use strict';

  var CACHE_VERSION = 'portfolio-static-v4';
  var CORE_ASSETS = [
    './',
    './index.html',
    './CSS/theme-base.css',
    './CSS/yellow-black.css',
    './CSS/preview.css',
    './CSS/styles.css',
    './Font-Awesome/subset/font-awesome-subset.css',
    './Font-Awesome/fonts/fontawesome-subset.woff2',
    './JS/lib/bootstrap.bundle.min.js',
    './JS/init.js',
    './JS/lazy-loader.js',
    './JS/data.js',
    './JS/components.js',
    './JS/theme-switcher.js',
    './JS/holiday-loader.js',
    './JS/sw-register.js',
    './Assets/avatar-160.webp',
    './Assets/avatar-240.webp',
    './Assets/avatar-320.webp',
    './Assets/avatar-hero.webp',
    './Assets/avatar.webp',
    './Assets/avatar-favicon.webp'
  ];

  var STATIC_FILE_RE = /\.(css|js|woff2?|ttf|webp|png|jpe?g|gif|svg)$/i;

  function isSameOrigin(url) {
    return url.origin === self.location.origin;
  }

  function isStaticAsset(url) {
    return url.pathname.indexOf('/Assets/') !== -1 || STATIC_FILE_RE.test(url.pathname);
  }

  function cacheStatic(request) {
    return caches.open(CACHE_VERSION).then(function (cache) {
      return cache.match(request).then(function (cached) {
        if (cached) return cached;

        return fetch(request).then(function (response) {
          if (response && response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        });
      });
    });
  }

  function staticRequest(rawUrl) {
    try {
      var url = new URL(rawUrl, self.location.href);
      if (isSameOrigin(url) && isStaticAsset(url)) {
        return new Request(url.href, { credentials: 'same-origin' });
      }
    } catch (err) {}

    return null;
  }

  function networkFirstDocument(request, preloadResponsePromise) {
    return caches.open(CACHE_VERSION).then(function (cache) {
      var responsePromise = preloadResponsePromise.then(function (preloadResponse) {
        return preloadResponse || fetch(request);
      });

      return responsePromise.then(function (response) {
        if (response && response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(function () {
        return cache.match(request).then(function (cached) {
          return cached || cache.match('./index.html');
        });
      });
    });
  }

  function cacheCoreAssets(cache) {
    return Promise.all(CORE_ASSETS.map(function (asset) {
      return cache.add(asset).catch(function () {
        /* Some generated media may not exist in local/dev checkouts.
           Keep the service worker install resilient. */
      });
    }));
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(CACHE_VERSION).then(function (cache) {
        return cacheCoreAssets(cache);
      }).then(function () {
        return self.skipWaiting();
      })
    );
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(
      Promise.resolve().then(function () {
        return self.registration.navigationPreload
          ? self.registration.navigationPreload.enable()
          : undefined;
      }).then(function () {
        return caches.keys();
      }).then(function (keys) {
        return Promise.all(keys.map(function (key) {
          if (key !== CACHE_VERSION) return caches.delete(key);
          return Promise.resolve();
        }));
      }).then(function () {
        return self.clients.claim();
      })
    );
  });

  self.addEventListener('fetch', function (event) {
    if (event.request.method !== 'GET') return;

    var url = new URL(event.request.url);
    if (!isSameOrigin(url)) return;

    if (event.request.mode === 'navigate') {
      event.respondWith(networkFirstDocument(event.request, event.preloadResponse));
      return;
    }

    if (isStaticAsset(url)) {
      event.respondWith(cacheStatic(event.request));
    }
  });

  self.addEventListener('message', function (event) {
    var data = event.data || {};
    var request = data.type === 'CACHE_ASSET' ? staticRequest(data.url) : null;
    if (!request) return;

    event.waitUntil(cacheStatic(request).catch(function () {}));
  });
})();
