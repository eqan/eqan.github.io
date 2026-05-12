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

  window.addEventListener('load', function () {
    var loadFonts = function () {
      if (loadFonts.done) return;
      loadFonts.done = true;
      loadStyle('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
      loadStyle('./Font-Awesome/css/font-awesome.min.css');
    };

    setTimeout(loadFonts, 6000);
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (eventName) {
      window.addEventListener(eventName, loadFonts, { once: true, passive: true });
    });

    if (location.hostname === 'eqanahmad.com' || location.hostname === 'www.eqanahmad.com') {
      idle(function () {
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "hbem75z47m");
      }, 5000);
    }
  });

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
