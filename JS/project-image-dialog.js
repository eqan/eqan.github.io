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
    var overlay = document.getElementById('project-image-dialog');
    var closeButton = document.getElementById('project-image-dialog-close');
    var image = document.getElementById('project-image-dialog-img');
    var caption = document.getElementById('project-image-dialog-caption');
    var previousFocus = null;

    if (!overlay || !closeButton || !image || !caption) return;

    function isOpen() {
      return overlay.classList.contains('active');
    }

    function openDialog(src, alt, trigger) {
      if (!src) return;

      previousFocus = trigger || document.activeElement;
      image.src = src;
      image.alt = alt || 'Project image preview';
      caption.textContent = alt || 'Project image preview';

      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('project-image-dialog-open');
      closeButton.focus();
    }

    function closeDialog() {
      if (!isOpen()) return;

      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('project-image-dialog-open');

      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    }

    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('.project-img-trigger');
      if (!trigger) return;

      event.preventDefault();
      openDialog(trigger.getAttribute('data-image-src'), trigger.getAttribute('data-image-alt'), trigger);
    });

    closeButton.addEventListener('click', closeDialog);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeDialog();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        closeDialog();
      }
    });
  });
})();
