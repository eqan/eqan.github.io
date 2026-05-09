/**
 * Projects Section — interactive controls
 * Wires up filter chips, sort toggle, scroll-reveal stagger, and tilt hover.
 */
(function () {
  function init() {
    var grid = document.querySelector('.projects-bento');
    if (!grid) return;

    var items = Array.prototype.slice.call(grid.querySelectorAll('.project-item'));
    var filterButtons = document.querySelectorAll('.projects-filter');
    var sortButtons = document.querySelectorAll('.projects-sort-btn');
    var emptyState = document.querySelector('.projects-empty');

    var activeFilter = 'all';
    var activeSort = 'featured';

    function applyFilter() {
      var visibleCount = 0;
      items.forEach(function (item) {
        var category = item.dataset.category || 'Other';
        var matches = activeFilter === 'all' || category === activeFilter;
        item.classList.toggle('is-hidden', !matches);
        if (matches) visibleCount++;
      });

      if (emptyState) emptyState.hidden = visibleCount > 0;
    }

    function applySort() {
      var sorted = items.slice().sort(function (a, b) {
        var yearA = parseInt(a.dataset.year, 10) || 0;
        var yearB = parseInt(b.dataset.year, 10) || 0;

        if (activeSort === 'recent') {
          if (yearB !== yearA) return yearB - yearA;
        }

        var priorityA = parseInt(a.dataset.priority, 10) || 99;
        var priorityB = parseInt(b.dataset.priority, 10) || 99;
        if (priorityA !== priorityB) return priorityA - priorityB;
        return yearB - yearA;
      });

      sorted.forEach(function (item) { grid.appendChild(item); });
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        activeFilter = btn.dataset.filter;
        applyFilter();
      });
    });

    sortButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        sortButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        activeSort = btn.dataset.sort;
        applySort();
      });
    });

    /* Scroll-reveal stagger using IntersectionObserver */
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add('is-revealed');
            }, index * 70);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      items.forEach(function (item) { observer.observe(item); });
    } else {
      items.forEach(function (item) { item.classList.add('is-revealed'); });
    }

    /* Pointer-based tilt on hover (desktop only) */
    var supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (supportsHover && !prefersReducedMotion) {
      items.forEach(function (item) {
        var card = item.querySelector('.project-card');
        if (!card) return;

        var rafId = null;

        item.addEventListener('mousemove', function (event) {
          var rect = item.getBoundingClientRect();
          var px = (event.clientX - rect.left) / rect.width;
          var py = (event.clientY - rect.top) / rect.height;
          var rotateY = (px - 0.5) * 6;
          var rotateX = (0.5 - py) * 6;

          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(function () {
            card.style.transform = 'translateY(-6px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
          });
        });

        item.addEventListener('mouseleave', function () {
          if (rafId) cancelAnimationFrame(rafId);
          card.style.transform = '';
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
