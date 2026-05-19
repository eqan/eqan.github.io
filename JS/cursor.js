/* ============ CUSTOM CURSOR ============
   Lightweight runtime for the square-dot + dashed-ring cursor.
   - No particle pool (avoids the generic "AI template" trail).
   - Outer containers are positioned by JS every frame; inner
     `.cursor-dot-glyph` / `.cursor-ring-glyph` handle all the visual
     transforms via CSS so transitions never fight the per-frame writes.
*/
(function() {
  /* Skip on touch-only devices */
  if (!window.matchMedia('(pointer: fine)').matches) return;

  /* Outer container = position only, inner glyph = visual transforms */
  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  var dotGlyph = document.createElement('span');
  dotGlyph.className = 'cursor-dot-glyph';
  dot.appendChild(dotGlyph);
  document.body.appendChild(dot);

  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  var ringGlyph = document.createElement('span');
  ringGlyph.className = 'cursor-ring-glyph';
  ring.appendChild(ringGlyph);
  document.body.appendChild(ring);

  /* State */
  var mouseX = -100;
  var mouseY = -100;
  var ringX = -100;
  var ringY = -100;
  var visible = false;
  var hoverState = '';
  var currentThemeClass = '';

  /* Easing for the ring follow — snappier than the previous build
     so the cursor feels mechanical rather than floaty. */
  var RING_EASE = 0.22;

  var HOVER_SELECTORS = [
    'a', 'button', '.btn', '[role="button"]', '.preview-theme',
    '.card', '.domain-card', '.modal-close', '.section-next',
    '[data-bs-toggle]', '.contact-cta', '.hero-cta', '.hero-secondary-cta',
    'input[type="submit"]', '.popover', '.close',
    '.project-card', '.service-card', '.profile-link-card',
    '.projects-filter', '.projects-sort-btn', '.search-trigger',
    '.testimonial-arrow', '.testimonial-dots button', '.card-arrow'
  ].join(',');

  var TEXT_SELECTORS = 'p, h1, h2, h3, h4, h5, h6, span, li, blockquote, .section-title';

  function detectTheme() {
    var href = '';
    var themeLink = document.getElementById('theme');
    if (themeLink) href = themeLink.getAttribute('href') || '';
    if (href.indexOf('yellow-black') !== -1) return 'yellow';
    if (href.indexOf('black-white') !== -1) return 'black';
    if (href.indexOf('pink-black') !== -1) return 'pink';
    if (href.indexOf('blue-black') !== -1) return 'blue';
    return 'yellow';
  }

  function setTheme(themeName) {
    var body = document.body;
    if (currentThemeClass) body.classList.remove(currentThemeClass);
    currentThemeClass = 'cursor-theme-' + themeName;
    body.classList.add(currentThemeClass);
  }

  function updateHoverState(target) {
    var newState = '';
    if (target) {
      if (target.closest && target.closest(HOVER_SELECTORS)) {
        newState = 'hover';
      } else if (target.matches && target.matches(TEXT_SELECTORS)) {
        newState = 'text';
      } else if (target.closest && target.closest(TEXT_SELECTORS)) {
        newState = 'text';
      }
    }

    if (newState !== hoverState) {
      document.body.classList.remove('cursor-hover', 'cursor-text');
      hoverState = newState;
      if (hoverState === 'hover') document.body.classList.add('cursor-hover');
      else if (hoverState === 'text') document.body.classList.add('cursor-text');
    }
  }

  function animate() {
    ringX += (mouseX - ringX) * RING_EASE;
    ringY += (mouseY - ringY) * RING_EASE;

    /* Pure translate — visual rotate/scale lives on the inner glyph */
    dot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
    ring.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px)';

    requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!visible) {
      visible = true;
      document.body.classList.remove('cursor-hidden');
    }

    updateHoverState(e.target);
  }, { passive: true });

  document.addEventListener('mousedown', function() {
    document.body.classList.add('cursor-click');
  });

  document.addEventListener('mouseup', function() {
    document.body.classList.remove('cursor-click');
  });

  document.addEventListener('mouseleave', function() {
    visible = false;
    document.body.classList.add('cursor-hidden');
  });

  document.addEventListener('mouseenter', function() {
    visible = true;
    document.body.classList.remove('cursor-hidden');
  });

  /* Init */
  document.body.classList.add('cursor-hidden');
  setTheme(detectTheme());
  requestAnimationFrame(animate);

  /* Theme switcher hook (called from JS/theme-switcher.js) */
  window.setCursorTheme = setTheme;
})();
