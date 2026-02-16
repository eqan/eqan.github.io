/* ============ CUSTOM CURSOR ============ */
(function() {
  /* Skip on touch-only devices */
  if (!window.matchMedia('(pointer: fine)').matches) return;

  /* Create cursor elements */
  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  /* Trail pool - reuse DOM elements for performance */
  var TRAIL_COUNT = 8;
  var trails = [];
  for (var t = 0; t < TRAIL_COUNT; t++) {
    var trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = '0';
    document.body.appendChild(trail);
    trails.push({ el: trail, x: 0, y: 0, alive: false });
  }
  var trailIndex = 0;
  var lastTrailTime = 0;
  var TRAIL_INTERVAL = 35;
  var TRAIL_LIFETIME = 500;

  /* State */
  var mouseX = -100;
  var mouseY = -100;
  var ringX = -100;
  var ringY = -100;
  var visible = false;
  var hoverState = '';
  var currentThemeClass = '';
  var isPressed = false;

  /* Easing factor for ring follow (lower = smoother trail) */
  var RING_EASE = 0.15;

  /* Detect interactive elements */
  var HOVER_SELECTORS = [
    'a', 'button', '.btn', '[role="button"]', '.preview-theme',
    '.card', '.domain-card', '.modal-close', '.section-next',
    '[data-toggle]', '.contact-cta', '.hero-cta', '.hero-secondary-cta',
    'input[type="submit"]', '.popover', '.close'
  ].join(',');

  var TEXT_SELECTORS = 'p, h1, h2, h3, h4, h5, h6, span, li, blockquote, .section-title';

  /* Determine initial theme from stylesheet */
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

  /* Apply theme class to body */
  function setTheme(themeName) {
    var body = document.body;
    if (currentThemeClass) body.classList.remove(currentThemeClass);
    currentThemeClass = 'cursor-theme-' + themeName;
    body.classList.add(currentThemeClass);
  }

  /* Check what the cursor is hovering over */
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
      document.body.classList.remove('cursor-hover', 'cursor-text', 'cursor-magnetic');
      hoverState = newState;
      if (hoverState === 'hover') {
        document.body.classList.add('cursor-hover');
      } else if (hoverState === 'text') {
        document.body.classList.add('cursor-text');
      }
    }
  }

  /* Spawn trail particle */
  function spawnTrail(x, y, now) {
    if (now - lastTrailTime < TRAIL_INTERVAL) return;
    lastTrailTime = now;

    var t = trails[trailIndex];
    t.x = x;
    t.y = y;
    t.alive = true;
    t.birth = now;
    t.el.style.transform = 'translate(' + x + 'px, ' + y + 'px) translate(-50%, -50%)';
    t.el.style.opacity = '0.4';

    trailIndex = (trailIndex + 1) % TRAIL_COUNT;
  }

  /* Fade out trail particles */
  function updateTrails(now) {
    for (var i = 0; i < TRAIL_COUNT; i++) {
      var t = trails[i];
      if (!t.alive) continue;
      var age = now - t.birth;
      if (age > TRAIL_LIFETIME) {
        t.alive = false;
        t.el.style.opacity = '0';
      } else {
        var progress = age / TRAIL_LIFETIME;
        var ease = 1 - progress * progress;
        t.el.style.opacity = String(0.35 * ease);
        var scale = 1 - progress * 0.5;
        t.el.style.transform = 'translate(' + t.x + 'px, ' + t.y + 'px) translate(-50%, -50%) scale(' + scale + ')';
      }
    }
  }

  /* Animation loop */
  function animate() {
    /* Smooth ring follow with easing */
    ringX += (mouseX - ringX) * RING_EASE;
    ringY += (mouseY - ringY) * RING_EASE;

    dot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) translate(-50%, -50%)';
    ring.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px) translate(-50%, -50%)';

    /* Trail particles when moving */
    var dx = mouseX - ringX;
    var dy = mouseY - ringY;
    var speed = Math.sqrt(dx * dx + dy * dy);
    if (speed > 1.5 && visible) {
      spawnTrail(mouseX, mouseY, performance.now());
    }
    updateTrails(performance.now());

    requestAnimationFrame(animate);
  }

  /* Event listeners */
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
    isPressed = true;
    document.body.classList.add('cursor-click');
  });

  document.addEventListener('mouseup', function() {
    isPressed = false;
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

  /* Initialize */
  document.body.classList.add('cursor-hidden');
  setTheme(detectTheme());
  requestAnimationFrame(animate);

  /* Expose theme setter for theme-switcher.js */
  window.setCursorTheme = setTheme;
})();
