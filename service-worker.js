/* Portfolio asset cache.
   Uses network-first for documents and cache-first for same-origin static assets. */
(function () {
  'use strict';

  var CACHE_PREFIX = 'portfolio-static';
  var cacheNamePromise = null;

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
    './JS/project-modal-gallery.js',
    './JS/project-image-dialog.js',
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
  var VERSION_SENSITIVE_FILE_RE = /\.(css|js)$/i;

  function getCacheName(force) {
    if (cacheNamePromise && !force) return cacheNamePromise;

    cacheNamePromise = fetch('./cache-version.json', { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('cache-version.json not ok');
        return response.json();
      })
      .then(function (data) {
        var name = data && data.cacheName ? String(data.cacheName).trim() : '';
        return name || CACHE_PREFIX;
      })
      .catch(function () {
        return CACHE_PREFIX;
      });

    return cacheNamePromise;
  }

  function openCache(force) {
    return getCacheName(force).then(function (name) {
      return caches.open(name);
    });
  }

  function isSameOrigin(url) {
    return url.origin === self.location.origin;
  }

  function isStaticAsset(url) {
    return url.pathname.indexOf('/Assets/') !== -1 || STATIC_FILE_RE.test(url.pathname);
  }

  function isVersionSensitiveAsset(url) {
    return VERSION_SENSITIVE_FILE_RE.test(url.pathname);
  }

  function cacheFirst(request) {
    return openCache(false).then(function (cache) {
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

  function staleWhileRevalidate(request) {
    return openCache(false).then(function (cache) {
      var fetchPromise = fetch(request, { cache: 'no-store' }).then(function (response) {
        if (response && response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(function () {
        return null;
      });

      return cache.match(request).then(function (cached) {
        if (cached) return cached;
        return fetchPromise.then(function (response) {
          return response || Response.error();
        });
      });
    });
  }

  function networkFirstDocument(request, preloadResponsePromise) {
    return openCache(false).then(function (cache) {
      var responsePromise = preloadResponsePromise.then(function (preloadResponse) {
        return preloadResponse || fetch(request, { cache: 'no-store' });
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

  self.addEventListener('install', function (event) {
    event.waitUntil(
      openCache(true).then(function (cache) {
        return Promise.all(CORE_ASSETS.map(function (asset) {
          return cache.add(new Request(asset, { cache: 'reload' })).catch(function () {
            /* Some generated media may not exist in local/dev checkouts. */
          });
        }));
      })
    );
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(
      Promise.resolve()
        .then(function () {
          return self.registration.navigationPreload
            ? self.registration.navigationPreload.enable()
            : undefined;
        })
        .then(function () {
          return getCacheName(true);
        })
        .then(function (activeCacheName) {
          return caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) {
              var isOurs = key === CACHE_PREFIX || key.indexOf(CACHE_PREFIX + '-') === 0;
              if (!isOurs || key === activeCacheName) return Promise.resolve();
              return caches.delete(key);
            }));
          });
        })
        .then(function () {
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

    if (!isStaticAsset(url)) return;

    event.respondWith(
      isVersionSensitiveAsset(url)
        ? staleWhileRevalidate(event.request)
        : cacheFirst(event.request)
    );
  });

  self.addEventListener('message', function (event) {
    var data = event.data || {};
    if (data.type === 'SKIP_WAITING') {
      event.waitUntil(self.skipWaiting());
    }
  });
})();
