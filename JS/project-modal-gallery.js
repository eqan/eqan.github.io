(function () {
  'use strict';

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  ready(function () {
    var galleries = document.querySelectorAll('[data-gallery-root]');
    if (!galleries.length) return;

    Array.prototype.forEach.call(galleries, function (gallery) {
      var slides = Array.prototype.slice.call(gallery.querySelectorAll('[data-gallery-slide]'));
      var thumbs = Array.prototype.slice.call(gallery.querySelectorAll('[data-gallery-thumb]'));
      var counter = gallery.querySelector('[data-gallery-counter]');
      var progress = gallery.querySelector('[data-gallery-progress]');
      var countdown = gallery.querySelector('[data-gallery-countdown]');
      var previousButton = gallery.querySelector('[data-gallery-prev]');
      var nextButton = gallery.querySelector('[data-gallery-next]');
      var modal = gallery.closest('.project-modal');
      var total = slides.length;
      var autoplaySeconds = Number(gallery.getAttribute('data-gallery-autoplay')) || 5;
      var autoplayMs = Math.max(autoplaySeconds * 1000, 1000);
      var activeIndex = 0;
      var timeRemaining = autoplayMs;
      var startedWithRemaining = autoplayMs;
      var timerId = null;
      var tickerId = null;
      var startedAt = 0;
      var isModalOpen = false;
      var isPausedByHover = false;
      var isPausedByFocus = false;

      if (!total) return;

      function normalizeIndex(index) {
        if (!total) return 0;
        return (index + total) % total;
      }

      function clearTimers() {
        if (timerId) {
          window.clearTimeout(timerId);
          timerId = null;
        }

        if (tickerId) {
          window.clearInterval(tickerId);
          tickerId = null;
        }
      }

      function updateTimerUI() {
        if (!progress || !countdown) return;

        var ratio = 1 - (timeRemaining / autoplayMs);
        var safeRatio = Math.min(Math.max(ratio, 0), 1);
        progress.style.transform = 'scaleX(' + safeRatio + ')';
        countdown.textContent = String(Math.max(1, Math.ceil(timeRemaining / 1000)));
      }

      function shouldAutoplay() {
        return total > 1 && isModalOpen && !isPausedByHover && !isPausedByFocus;
      }

      function pauseAutoplay() {
        if (!startedAt) return;

        timeRemaining = Math.max(0, startedWithRemaining - (Date.now() - startedAt));
        startedAt = 0;
        clearTimers();
        updateTimerUI();
      }

      function startAutoplay() {
        clearTimers();

        if (!shouldAutoplay()) {
          updateTimerUI();
          return;
        }

        if (timeRemaining <= 0 || timeRemaining > autoplayMs) {
          timeRemaining = autoplayMs;
        }

        startedAt = Date.now();
        startedWithRemaining = timeRemaining;
        updateTimerUI();

        timerId = window.setTimeout(function () {
          startedAt = 0;
          showSlide(activeIndex + 1, true);
        }, timeRemaining);

        tickerId = window.setInterval(function () {
          if (!startedAt) return;
          timeRemaining = Math.max(0, startedWithRemaining - (Date.now() - startedAt));
          updateTimerUI();
        }, 100);
      }

      function resetAutoplay() {
        timeRemaining = autoplayMs;
        startedAt = 0;
        clearTimers();
        updateTimerUI();
        startAutoplay();
      }

      function showSlide(index, resetTimer) {
        activeIndex = normalizeIndex(index);

        slides.forEach(function (slide, slideIndex) {
          var isActive = slideIndex === activeIndex;
          var trigger = slide.querySelector('.project-img-trigger');
          slide.classList.toggle('is-active', isActive);
          slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
          if (trigger) {
            trigger.tabIndex = isActive ? 0 : -1;
          }
        });

        thumbs.forEach(function (thumb, thumbIndex) {
          var isActive = thumbIndex === activeIndex;
          thumb.classList.toggle('is-active', isActive);
          thumb.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        if (counter) {
          counter.textContent = (activeIndex + 1) + ' / ' + total;
        }

        if (resetTimer !== false) {
          resetAutoplay();
        } else {
          updateTimerUI();
        }
      }

      function handleThumbClick(event) {
        var target = event.currentTarget.getAttribute('data-slide-target');
        showSlide(Number(target), true);
      }

      if (previousButton) {
        previousButton.addEventListener('click', function () {
          showSlide(activeIndex - 1, true);
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', function () {
          showSlide(activeIndex + 1, true);
        });
      }

      thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', handleThumbClick);
      });

      gallery.addEventListener('mouseenter', function () {
        isPausedByHover = true;
        pauseAutoplay();
      });

      gallery.addEventListener('mouseleave', function () {
        isPausedByHover = false;
        startAutoplay();
      });

      gallery.addEventListener('focusin', function () {
        isPausedByFocus = true;
        pauseAutoplay();
      });

      gallery.addEventListener('focusout', function (event) {
        if (gallery.contains(event.relatedTarget)) return;
        isPausedByFocus = false;
        startAutoplay();
      });

      if (modal) {
        modal.addEventListener('shown.bs.modal', function () {
          isModalOpen = true;
          isPausedByHover = false;
          isPausedByFocus = false;
          showSlide(0, true);
        });

        modal.addEventListener('hide.bs.modal', function () {
          isModalOpen = false;
          isPausedByHover = false;
          isPausedByFocus = false;
          timeRemaining = autoplayMs;
          startedAt = 0;
          clearTimers();
          updateTimerUI();
        });

        modal.addEventListener('keydown', function (event) {
          if (!isModalOpen || total < 2) return;

          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showSlide(activeIndex - 1, true);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            showSlide(activeIndex + 1, true);
          }
        });
      }

      showSlide(0, false);
    });
  });
})();
