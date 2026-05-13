/*!
 * Site init logic.
 * Owns: section anchor scrolling, side-nav toggle, carousel equal-height,
 *       and the `interaction-in` reveal toggle that drives scroll animations.
 */
(function () {
  'use strict';

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  function each(selector, callback) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), callback);
  }

  var suppressNavObserverUntil = 0;

  ready(function () {
    function smoothScrollTo(target) {
      var top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    document.addEventListener('click', function (event) {
      var link = event.target.closest('.goto-section');
      if (!link) return;

      var href = link.getAttribute('href');
      var target = href ? document.querySelector(href) : null;
      if (!target) return;

      event.preventDefault();

      if (link.classList.contains('sections-nav-link')) {
        each('.sections-nav-link', function (navLink) {
          navLink.classList.toggle('active', navLink === link);
        });
        suppressNavObserverUntil = Date.now() + 700;
        document.body.classList.remove('sections-nav-in');
      }

      if (window.matchMedia('(min-width: 1200px)').matches) {
        smoothScrollTo(target);
      } else {
        setTimeout(function () { smoothScrollTo(target); }, 220);
      }
    });

    each('.sections-nav-toggler', function (button) {
      button.addEventListener('click', function () {
        document.body.classList.toggle('sections-nav-in');
      });
    });
  });

  ready(function () {
    function equalizeCarousels() {
      each('.carousel', function (carousel) {
        var items = carousel.querySelectorAll('.carousel-item');
        Array.prototype.forEach.call(items, function (item) {
          item.style.minHeight = '0';
        });
        var max = 0;
        Array.prototype.forEach.call(items, function (item) {
          var h = item.getBoundingClientRect().height;
          if (h > max) max = h;
        });
        Array.prototype.forEach.call(items, function (item) {
          item.style.minHeight = max + 'px';
        });
      });
    }
    equalizeCarousels();
    window.addEventListener('resize', equalizeCarousels);
  });

  ready(function () {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.section'));
    if (!sections.length) return;
    var navLinks = [];

    function getNavLinks() {
      navLinks = Array.prototype.slice.call(document.querySelectorAll('.sections-nav-link[href^="#"]'));
      return navLinks;
    }

    function reveal(el) {
      if (el) el.classList.add('interaction-in');
    }

    function setActive(section) {
      if (!section || !section.id) return;
      if (!navLinks.length) getNavLinks();
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + section.id);
      });
    }

    reveal(sections[0]);
    setActive(sections[0]);

    if ('IntersectionObserver' in window) {
      var visibleSections = {};

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleSections[entry.target.id] = entry.target;
            reveal(entry.target);
          } else if (entry.target.id) {
            delete visibleSections[entry.target.id];
          }
        });

        var active = sections.find(function (section) {
          return visibleSections[section.id];
        });
        if (active && Date.now() > suppressNavObserverUntil) setActive(active);
      }, { rootMargin: '0px 0px -20% 0px', threshold: 0.08 });

      sections.forEach(function (section) {
        observer.observe(section);
      });
    } else {
      sections.forEach(reveal);
    }
  });
})();
