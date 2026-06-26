/* Portfolio asset cache.
   Keeps static CSS/JS/fonts/images on disk after first load while using
   network-first for documents so content updates are not hidden by cache. */
(function () {
  'use strict';

  var CACHE_VERSION = 'portfolio-static-v1';
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
    './JS/search.js',
    './JS/projects.js',
    './JS/cursor.js',
    './JS/holidays.js',
    './CSS/black-white.css',
    './CSS/pink-black.css',
    './CSS/blue-black.css',
    './CSS/cursor.css',
    './CSS/theme-animations.css',
    './CSS/holiday-animations.css',
    './Assets/avatar-160.webp',
    './Assets/avatar-240.webp',
    './Assets/avatar-320.webp',
    './Assets/avatar-hero.webp',
    './Assets/avatar.webp',
    './Assets/avatar-favicon.webp',
    './Assets/Chatqlm-Hero.webp',
    './Assets/Chatqlm-Main.webp',
    './Assets/Chatqlm-Problem-Set.webp',
    './Assets/Chatqlm-budget-problem.webp',
    './Assets/Chatqlm-Viz.webp',
    './Assets/Super-Hero.webp',
    './Assets/Super-Home.webp',
    './Assets/Super-Viz.webp',
    './Assets/Super-Code.webp',
    './Assets/Akito-Talent.webp',
    './Assets/Akito-Chat.webp',
    './Assets/Akito-Assessment.webp',
    './Assets/Akito-job-seeker.webp',
    './Assets/project_1.webp',
    './Assets/project_2.webp',
    './Assets/project_3.webp',
    './Assets/project_4.webp',
    './Assets/project_5.webp',
    './Assets/project_6.webp',
    './Assets/project_7.webp',
    './Assets/project_8.webp',
    './Assets/project_9.webp',
    './Assets/project_10.webp',
    './Assets/project_11.webp',
    './Assets/nuces-blocked-add-certificates.webp',
    './Assets/nuces-blocked-manage-certificates.webp',
    './Assets/nuces-blocked-proposals.webp',
    './Assets/nuces-blocked-user-profiles.webp',
    './Assets/nuces-blocked-landing.webp',
    './Assets/nuces-blocked-academic-portfolios.webp',
    './Assets/qanooni_review.webp',
    './Assets/qanooni_draft.webp',
    './Assets/qanooni_litigation.webp',
    './Assets/qanooni_proposal.webp',
    './Assets/gpu-lab-server-list.webp',
    './Assets/gpu-lab-server.webp',
    './Assets/testimonial_3.webp',
    './Assets/testimonial_4.webp',
    './Assets/Unknown.webp'
  ];

  var RUNTIME_EXTENSIONS = [
    '.css',
    '.js',
    '.woff',
    '.woff2',
    '.ttf',
    '.webp',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg'
  ];

  function isSameOrigin(url) {
    return url.origin === self.location.origin;
  }

  function isStaticAsset(url) {
    if (url.pathname.indexOf('/Assets/') !== -1) return true;

    return RUNTIME_EXTENSIONS.some(function (ext) {
      return url.pathname.toLowerCase().endsWith(ext);
    });
  }

  function staleWhileRevalidate(request) {
    return caches.open(CACHE_VERSION).then(function (cache) {
      return cache.match(request).then(function (cached) {
        var networkFetch = fetch(request).then(function (response) {
          if (response && response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        }).catch(function () {
          return cached;
        });

        return cached || networkFetch;
      });
    });
  }

  function networkFirstDocument(request) {
    return caches.open(CACHE_VERSION).then(function (cache) {
      return fetch(request).then(function (response) {
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

  function addCoreAssets(cache) {
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
        return addCoreAssets(cache);
      }).then(function () {
        return self.skipWaiting();
      })
    );
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(
      caches.keys().then(function (keys) {
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
      event.respondWith(networkFirstDocument(event.request));
      return;
    }

    if (isStaticAsset(url)) {
      event.respondWith(staleWhileRevalidate(event.request));
    }
  });
})();
