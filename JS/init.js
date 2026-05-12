/*!
 * Site init logic extracted from the legacy all.js bundle.
 * Owns: section anchor scrolling, side-nav toggle, carousel equal-height,
 *       and the `interaction-in` reveal toggle that drives scroll animations.
 *
 * Requires: jQuery (loaded before this script).
 */
(function ($) {
  'use strict';

  function scrollStop(callback) {
    if (typeof callback !== 'function') return;
    var timer;
    window.addEventListener('scroll', function () {
      window.clearTimeout(timer);
      timer = setTimeout(callback, 66);
    }, false);
  }

  $(function () {
    function smoothScrollTo($target) {
      window.scrollTo({ top: $target.offset().top, behavior: 'smooth' });
    }

    $('.goto-section').on('click', function () {
      var $target = $($(this).attr('href'));
      if (!$target.length) return false;

      if (window.matchMedia('(min-width: 1200px)').matches) {
        smoothScrollTo($target);
      } else {
        setTimeout(function () { smoothScrollTo($target); }, 350);
      }
      return false;
    });

    $('.sections-nav-link').on('click', function () {
      $('body').removeClass('sections-nav-in');
    });

    $('.sections-nav-toggler').on('click', function () {
      $('body').toggleClass('sections-nav-in');
    });
  });

  $(function () {
    function equalizeCarousels() {
      $('.carousel').each(function () {
        var $items = $(this).find('.carousel-item');
        $items.css('min-height', 0);
        var max = 0;
        $items.each(function () {
          var h = $(this).height();
          if (h > max) max = h;
        });
        $items.css('min-height', max);
      });
    }
    equalizeCarousels();
    window.addEventListener('resize', equalizeCarousels);
  });

  $(function () {
    var $sections = $('.section');
    if (!$sections.length) return;

    var offsetRatio = window.innerWidth >= 1024 ? 1.2 : 0.85;
    var viewportBottom = $(window).height() * offsetRatio;

    function reveal(el) {
      if (el) $(el).addClass('interaction-in');
    }

    var initial;
    $sections.each(function () {
      var top = Math.abs(this.getBoundingClientRect().top);
      var bestTop = initial ? Math.abs(initial.getBoundingClientRect().top) : Infinity;
      if (top < bestTop) initial = this;
    });
    reveal(initial);

    scrollStop(function () {
      var best;
      $sections.each(function () {
        var rect = this.getBoundingClientRect();
        var topVisible = rect.top >= 0 && rect.top <= viewportBottom &&
          (!best || rect.top < Math.abs(best.getBoundingClientRect().top));
        var bottomVisible = rect.bottom >= 0 &&
          (!best || rect.bottom < best.getBoundingClientRect().bottom);
        if (topVisible || bottomVisible) best = this;
      });
      reveal(best);
    });
  });
})(window.jQuery);
