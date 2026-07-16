(() => {
  const HOST_SELECTOR = '.project-img-wrapper, .project-card-img, .avatar-dialog';

  function ensureIndicator(host) {
    if (!host) return null;
    host.classList.add('img-loading-host');

    if (!host.querySelector(':scope > .img-loading-indicator')) {
      const el = document.createElement('span');
      el.className = 'img-loading-indicator';
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
      host.appendChild(el);
    }
    return host;
  }

  function getHostForImage(img) {
    return img.closest(HOST_SELECTOR);
  }

  function trackImage(img) {
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.loadingTracked === '1') return;

    const host = ensureIndicator(getHostForImage(img));
    if (!host) return;

    img.dataset.loadingTracked = '1';

    const done = () => host.classList.remove('is-loading');

    // If cached and already decoded, skip spinner.
    if (img.complete && img.naturalWidth > 0) {
      done();
      return;
    }

    host.classList.add('is-loading');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }

  function scan(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('img').forEach(trackImage);
  }

  function init() {
    scan(document);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.tagName === 'IMG') trackImage(node);
          else scan(node);
        }
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
