/* Lazy-loads optional assets after user intent, idle time, or section visibility. */
(function () {
  'use strict';

  var loadedScripts = {};
  var loadedStyles = {};

  function loadScript(src, callback) {
    if (loadedScripts[src]) {
      if (callback) loadedScripts[src].addEventListener('load', callback, { once: true });
      return loadedScripts[src];
    }

    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    if (callback) script.addEventListener('load', callback, { once: true });
    document.body.appendChild(script);
    loadedScripts[src] = script;
    return script;
  }

  function loadStyle(href) {
    if (loadedStyles[href] || document.querySelector('link[href="' + href + '"]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    loadedStyles[href] = link;
  }

  function idle(callback, timeout) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: timeout || 3000 });
    } else {
      setTimeout(callback, timeout || 1200);
    }
  }

  window.SiteLazyLoader = {
    loadScript: loadScript,
    loadStyle: loadStyle,
    idle: idle
  };

  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    idle(function () {
      loadStyle('./CSS/cursor.css');
      loadScript('./JS/cursor.js');
    }, 1500);
  }

  function loadSearch() {
    loadScript('./JS/search.js', function () {
      var toggle = document.getElementById('site-search-toggle');
      if (toggle && toggle.dataset.pendingOpen === 'true') {
        toggle.dataset.pendingOpen = '';
        toggle.click();
      }
    });
  }

  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('#site-search-toggle');
    if (!toggle || loadedScripts['./JS/search.js']) return;
    event.preventDefault();
    event.stopPropagation();
    toggle.dataset.pendingOpen = 'true';
    loadSearch();
  }, true);

  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && !loadedScripts['./JS/search.js']) {
      event.preventDefault();
      loadSearch();
    }
  });

  function loadProjects() {
    loadScript('./JS/projects.js');
  }

  window.addEventListener('load', function () {
    var projects = document.getElementById('section-05');
    if (!projects) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) {
          observer.disconnect();
          loadProjects();
        }
      }, { rootMargin: '500px 0px' });
      observer.observe(projects);
    } else {
      idle(loadProjects, 2500);
    }
  });
})();
