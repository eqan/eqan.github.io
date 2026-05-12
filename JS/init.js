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

  function scrollStop(callback) {
    if (typeof callback !== 'function') return;
    var timer;
    window.addEventListener('scroll', function () {
      window.clearTimeout(timer);
      timer = setTimeout(callback, 66);
    }, false);
  }

  ready(function () {
    function smoothScrollTo(target) {
      var top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    each('.goto-section', function (link) {
      link.addEventListener('click', function (event) {
        var href = link.getAttribute('href');
        var target = href ? document.querySelector(href) : null;
        if (!target) return;

        event.preventDefault();
        if (window.matchMedia('(min-width: 1200px)').matches) {
          smoothScrollTo(target);
        } else {
          setTimeout(function () { smoothScrollTo(target); }, 350);
        }
      });
    });

    each('.sections-nav-link', function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('sections-nav-in');
      });
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

    var offsetRatio = window.innerWidth >= 1024 ? 1.2 : 0.85;
    var viewportBottom = window.innerHeight * offsetRatio;

    function reveal(el) {
      if (el) el.classList.add('interaction-in');
    }

    var initial;
    sections.forEach(function (section) {
      var top = Math.abs(section.getBoundingClientRect().top);
      var bestTop = initial ? Math.abs(initial.getBoundingClientRect().top) : Infinity;
      if (top < bestTop) initial = section;
    });
    reveal(initial);

    scrollStop(function () {
      var best;
      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        var topVisible = rect.top >= 0 && rect.top <= viewportBottom &&
          (!best || rect.top < Math.abs(best.getBoundingClientRect().top));
        var bottomVisible = rect.bottom >= 0 &&
          (!best || rect.bottom < best.getBoundingClientRect().bottom);
        if (topVisible || bottomVisible) best = section;
      });
      reveal(best);
    });
  });
})();
