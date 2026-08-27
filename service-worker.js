/* Portfolio asset cache.
   Keeps static CSS/JS/fonts/images on disk after first load while using
   network-first for documents so content updates are not hidden by cache. */
(function () {
  'use strict';
  var CACHE_PREFIX = 'portfolio-static';
  var cacheNamePromise = null;
  var CACHE_BATCH_SIZE = 3;
  var CACHE_BATCH_DELAY_MS = 120;
  var ASSET_QUEUE_BATCH_SIZE = 2;
  var ASSET_QUEUE_DELAY_MS = 180;
  var assetCacheQueue = [];
  var queuedAssetUrls = {};
  var assetQueuePromise = null;

  function getCacheName(force) {
    if (cacheNamePromise && !force) return cacheNamePromise;

    // Bypass HTTP cache so a fresh deploy can't get pinned to stale JSON.
    cacheNamePromise = fetch('./cache-version.json', { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('cache-version.json not ok');
        return response.json();
      })
      .then(function (data) {
        var name = data && data.cacheName ? String(data.cacheName) : '';
        return name.trim() || CACHE_PREFIX;
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

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

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

  function isSameOrigin(url) {
    return url.origin === self.location.origin;
  }

  function isStaticAsset(url) {
    return url.pathname.indexOf('/Assets/') !== -1 || STATIC_FILE_RE.test(url.pathname);
  }

  function isVersionSensitiveAsset(url) {
    return VERSION_SENSITIVE_FILE_RE.test(url.pathname);
  }

  function cacheStatic(request) {
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

  function staleWhileRevalidateStatic(request) {
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

  function cacheCoreAssets(cache) {
    var index = 0;

    function cacheNextBatch() {
      var batch = CORE_ASSETS.slice(index, index + CACHE_BATCH_SIZE);
      index += CACHE_BATCH_SIZE;

      if (!batch.length) return Promise.resolve();

      return Promise.all(batch.map(function (asset) {
        var request = new Request(asset, { cache: 'reload' });
        return cache.add(request).catch(function () {
          /* Some generated media may not exist in local/dev checkouts.
             Keep the service worker install resilient. */
        });
      })).then(function () {
        return index < CORE_ASSETS.length
          ? delay(CACHE_BATCH_DELAY_MS).then(cacheNextBatch)
          : undefined;
      });
    }

    return cacheNextBatch();
  }

  function processAssetQueue() {
    if (!assetCacheQueue.length) {
      assetQueuePromise = null;
      return Promise.resolve();
    }

    var batch = assetCacheQueue.splice(0, ASSET_QUEUE_BATCH_SIZE);

    return Promise.all(batch.map(function (request) {
      return cacheStatic(request).catch(function () {}).then(function () {
        delete queuedAssetUrls[request.url];
      });
    })).then(function () {
      return assetCacheQueue.length
        ? delay(ASSET_QUEUE_DELAY_MS).then(processAssetQueue)
        : processAssetQueue();
    });
  }

  function enqueueCacheAsset(request) {
    if (queuedAssetUrls[request.url]) return assetQueuePromise || Promise.resolve();
    queuedAssetUrls[request.url] = true;
    assetCacheQueue.push(request);
    if (!assetQueuePromise) {
      assetQueuePromise = processAssetQueue();
    }
    return assetQueuePromise;
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(
      openCache(true).then(function (cache) {
        return cacheCoreAssets(cache);
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
              if (!isOurs) return Promise.resolve();
              if (key !== activeCacheName) return caches.delete(key);
              return Promise.resolve();
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

    if (isStaticAsset(url)) {
      event.respondWith(
        isVersionSensitiveAsset(url)
          ? staleWhileRevalidateStatic(event.request)
          : cacheStatic(event.request)
      );
    }
  });

  self.addEventListener('message', function (event) {
    var data = event.data || {};
    if (data.type === 'SKIP_WAITING') {
      event.waitUntil(self.skipWaiting());
      return;
    }

    var request = data.type === 'CACHE_ASSET' ? staticRequest(data.url) : null;
    if (!request) return;

    event.waitUntil(enqueueCacheAsset(request));
  });
})();
