/* Theme animation function */
function playThemeAnimation(themeFile) {
  var themeName = themeFile.replace('./CSS/', '').replace('.css', '');

  var existing = document.querySelector('.theme-anim-overlay');
  if (existing) existing.remove();

  var overlay = document.createElement('div');
  overlay.className = 'theme-anim-overlay';
  document.body.appendChild(overlay);

  if (themeName === 'yellow-black') {
    var sky = document.createElement('div');
    sky.className = 'sunrise-sky';
    overlay.appendChild(sky);

    var wrapper = document.createElement('div');
    wrapper.className = 'sunrise-wrapper';
    var sun = document.createElement('div');
    sun.className = 'sunrise-sun';
    wrapper.appendChild(sun);
    overlay.appendChild(wrapper);

    for (var i = 0; i < 14; i++) {
      var ray = document.createElement('div');
      ray.className = 'sunrise-ray';
      var rw = 1.5 + Math.random() * 2.5;
      ray.style.width = rw + 'px';
      ray.style.left = 'calc(50% - ' + (rw / 2) + 'px)';
      var jitter = Math.random() * 8 - 4;
      ray.style.transform = 'translate(0, -100%) rotate(' + (i * 25.7 + jitter) + 'deg)';
      ray.style.animationDelay = (0.15 + i * 0.07 + Math.random() * 0.06) + 's';
      sun.appendChild(ray);
    }

    for (var m = 0; m < 18; m++) {
      var mote = document.createElement('div');
      mote.className = 'sunrise-mote';
      mote.style.left = (8 + Math.random() * 84) + '%';
      mote.style.bottom = (Math.random() * 35) + '%';
      var ms = 2 + Math.random() * 3;
      mote.style.width = mote.style.height = ms + 'px';
      mote.style.animationDelay = (Math.random() * 1.8) + 's';
      mote.style.animationDuration = (2.2 + Math.random() * 1.5) + 's';
      overlay.appendChild(mote);
    }

  } else if (themeName === 'black-white') {
    var night = document.createElement('div');
    night.className = 'moon-night';
    overlay.appendChild(night);

    var moon = document.createElement('div');
    moon.className = 'moon-element';
    var craters = [{t:22,l:28,s:11},{t:50,l:52,s:7},{t:32,l:62,s:5},{t:60,l:35,s:4}];
    for (var ci = 0; ci < craters.length; ci++) {
      var crater = document.createElement('div');
      crater.className = 'moon-crater';
      crater.style.top = craters[ci].t + '%';
      crater.style.left = craters[ci].l + '%';
      crater.style.width = crater.style.height = craters[ci].s + 'px';
      moon.appendChild(crater);
    }
    overlay.appendChild(moon);

    for (var r = 0; r < 3; r++) {
      var ring = document.createElement('div');
      ring.className = 'moon-ring';
      var rs = 120 + r * 65;
      ring.style.width = ring.style.height = rs + 'px';
      ring.style.animationDelay = (0.12 + r * 0.28) + 's';
      overlay.appendChild(ring);
    }

    for (var s = 0; s < 32; s++) {
      var isCross = Math.random() > 0.78;
      var star;
      if (isCross) {
        star = document.createElement('div');
        star.className = 'moon-star-cross';
        var cSize = 6 + Math.random() * 10;
        star.style.height = cSize + 'px';
      } else {
        star = document.createElement('div');
        star.className = 'moon-star';
        var ds = 1.5 + Math.random() * 3;
        star.style.width = star.style.height = ds + 'px';
        star.style.boxShadow = '0 0 ' + (ds + 2) + 'px ' + (ds * 0.6) + 'px rgba(200,200,255,0.3)';
      }
      star.style.left = (Math.random() * 100) + '%';
      star.style.top = (Math.random() * 100) + '%';
      star.style.animationDelay = (0.08 + Math.random() * 1.3) + 's';
      overlay.appendChild(star);
    }

    for (var sh = 0; sh < 2; sh++) {
      var shoot = document.createElement('div');
      shoot.className = 'shooting-star';
      shoot.style.left = (12 + Math.random() * 55) + '%';
      shoot.style.top = (8 + Math.random() * 30) + '%';
      shoot.style.animationDelay = (0.6 + sh * 0.8 + Math.random() * 0.4) + 's';
      overlay.appendChild(shoot);
    }

  } else if (themeName === 'pink-black') {
    var glow = document.createElement('div');
    glow.className = 'hearts-glow';
    overlay.appendChild(glow);

    var pinks = ['#f8a2d5', '#ff69b4', '#ff1493', '#ffb6c1', '#ff85a2', '#e91e8e', '#ff6eb4'];
    var floatClasses = ['heart-float-1', 'heart-float-2', 'heart-float-3', 'heart-float-4'];

    for (var h = 0; h < 24; h++) {
      var heart = document.createElement('div');
      var isOutline = Math.random() > 0.72;
      var fc = floatClasses[Math.floor(Math.random() * floatClasses.length)];
      heart.className = 'heart-particle ' + fc + (isOutline ? ' heart-outline' : '');
      heart.style.left = (2 + Math.random() * 96) + '%';
      heart.style.fontSize = (11 + Math.random() * 28) + 'px';
      heart.style.color = pinks[Math.floor(Math.random() * pinks.length)];
      heart.style.animationDelay = (Math.random() * 1.6) + 's';
      heart.style.animationDuration = (2.2 + Math.random() * 1.4) + 's';
      overlay.appendChild(heart);
    }

    for (var sp = 0; sp < 14; sp++) {
      var sparkle = document.createElement('div');
      sparkle.className = 'heart-sparkle';
      sparkle.style.left = (4 + Math.random() * 92) + '%';
      sparkle.style.bottom = (-15 + Math.random() * 25) + 'px';
      sparkle.style.animationDelay = (Math.random() * 2) + 's';
      sparkle.style.animationDuration = (2 + Math.random() * 1.5) + 's';
      var spz = 2 + Math.random() * 3;
      sparkle.style.width = sparkle.style.height = spz + 'px';
      overlay.appendChild(sparkle);
    }

  } else if (themeName === 'blue-black') {
    var blueSky = document.createElement('div');
    blueSky.className = 'clouds-sky';
    overlay.appendChild(blueSky);

    var layers = [
      { cls: 'cloud-layer-far',  n: 3, wMin: 120, wMax: 190, tMin: 5,  tMax: 30, colors: ['rgba(200,220,255,0.35)','rgba(185,210,255,0.3)','rgba(210,225,255,0.28)'] },
      { cls: 'cloud-layer-mid',  n: 3, wMin: 80,  wMax: 145, tMin: 20, tMax: 55, colors: ['rgba(170,195,255,0.55)','rgba(155,185,255,0.5)','rgba(175,200,255,0.48)'] },
      { cls: 'cloud-layer-near', n: 3, wMin: 55,  wMax: 110, tMin: 38, tMax: 72, colors: ['rgba(150,175,255,0.72)','rgba(140,170,255,0.65)','rgba(160,185,255,0.68)'] }
    ];
    for (var li = 0; li < layers.length; li++) {
      var L = layers[li];
      for (var ci2 = 0; ci2 < L.n; ci2++) {
        var cloud = document.createElement('div');
        cloud.className = 'cloud-element ' + L.cls;
        var cw = L.wMin + Math.random() * (L.wMax - L.wMin);
        cloud.style.width = cw + 'px';
        cloud.style.height = (cw * (0.32 + Math.random() * 0.08)) + 'px';
        cloud.style.top = (L.tMin + Math.random() * (L.tMax - L.tMin)) + '%';
        cloud.style.background = L.colors[Math.floor(Math.random() * L.colors.length)];
        cloud.style.animationDelay = (ci2 * 0.35 + li * 0.12 + Math.random() * 0.25) + 's';
        overlay.appendChild(cloud);
      }
    }

    for (var w = 0; w < 5; w++) {
      var wisp = document.createElement('div');
      wisp.className = 'cloud-wisp';
      wisp.style.width = (50 + Math.random() * 110) + 'px';
      wisp.style.top = (12 + Math.random() * 58) + '%';
      wisp.style.animationDelay = (0.25 + w * 0.38 + Math.random() * 0.3) + 's';
      wisp.style.animationDuration = (2.5 + Math.random() * 1.2) + 's';
      overlay.appendChild(wisp);
    }
  }

  setTimeout(function() {
    if (overlay.parentNode) overlay.remove();
  }, 4200);
}

/* Theme selector initialization and switching */
$(function () {
  var $themesContainer = $('.preview-themes');
  setTimeout(function() {
    $themesContainer.addClass('attention');
  }, 500);

  $('.preview-theme').each(function() {
    var currentTheme = $('#theme').attr('href');
    if ($(this).attr('data-theme') === currentTheme) {
      $(this).addClass('active');
    }
  });

  $('.preview-theme').click(function () {
    var $this = $(this);
    var $link = $('#theme');
    var $overlay = $('.theme-transition-overlay');
    var newTheme = $this.attr('data-theme');

    if ($link.attr('href') === newTheme) return false;

    playThemeAnimation(newTheme);

    /* Update custom cursor theme */
    var cursorThemeMap = {
      './CSS/yellow-black.css': 'yellow',
      './CSS/black-white.css': 'black',
      './CSS/pink-black.css': 'pink',
      './CSS/blue-black.css': 'blue'
    };
    if (window.setCursorTheme && cursorThemeMap[newTheme]) {
      window.setCursorTheme(cursorThemeMap[newTheme]);
    }

    $overlay.css('background', getComputedStyle(document.body).backgroundColor);
    $overlay.addClass('active');

    setTimeout(function() {
      if ($link.length) {
        $link.attr('href', newTheme);
      }

      $('.preview-theme').removeClass('active');
      $this.addClass('active');

      var isDark = $this.attr('data-theme-bg') === 'dark';
      var root = document.documentElement.style;
      root.setProperty('--scrollbar-thumb', isDark ? '#fff' : '#000');
      root.setProperty('--scrollbar-track', isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)');
      root.setProperty('--contact-border', isDark ? '#fff' : '#000');
      root.setProperty('--contrast-color', isDark ? '#000' : '#fff');
      root.setProperty('--theme-pill-bg', isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)');
      root.setProperty('--theme-pill-text', isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)');
      root.setProperty('--theme-swatch-border', isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)');
      root.setProperty('--theme-swatch-hover', isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)');
      root.setProperty('--theme-swatch-active', isDark ? '#000' : '#fff');
      root.setProperty('--theme-swatch-glow', isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)');

      root.setProperty('--content-bg', isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)');
      root.setProperty('--content-item-bg', isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)');
      root.setProperty('--content-item-hover', isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)');
      root.setProperty('--content-blockquote-bg', isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.025)');
      root.setProperty('--nav-hover-bg', isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)');
      root.setProperty('--nav-active-bg', isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)');
      root.setProperty('--nav-border-color', isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)');

      setTimeout(function() {
        $overlay.removeClass('active');
      }, 100);
    }, 150);

    return false;
  });
});

/* Domain card popovers (disabled on mobile for better UX) */
$(function() {
  var isMobile = function() { return $(window).width() < 768; };

  $('.domain-card').each(function() {
    var $card = $(this);
    var href = $card.attr('href') || '';
    var isModal = $card.data('toggle') === 'modal' && href.startsWith('#');

    if (isMobile()) return;

    if (isModal) {
      var $modal = $(href);
      if ($modal.length) {
        var previewHtml = $modal.find('.modal-body').html() || '';
        $card.popover({
          html: true,
          trigger: 'hover',
          placement: 'auto',
          container: 'body',
          content: '<div class="popover-preview">' + previewHtml + '</div>'
        });
      }
    } else if ($card.attr('target') === '_blank') {
      var label = $card.find('h4').text() || 'Open link';
      $card.tooltip({ title: label, placement: 'bottom' });
    }
  });
});

/* Clipboard copy for crypto addresses */
var copyToClipboard = function(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Address copied to clipboard');
};

document.addEventListener('click', function(e) {
  var bitcoin = e.target.closest('#bitcoin-text');
  var ethereum = e.target.closest('#ethereum-text');
  if (bitcoin) {
    var addr = bitcoin.querySelector('.hidden-address');
    if (addr) copyToClipboard(addr.innerText);
  }
  if (ethereum) {
    var addr2 = ethereum.querySelector('.hidden-address');
    if (addr2) copyToClipboard(addr2.innerText);
  }
});

/* Avatar dialog */
$(function() {
  var $dialog = $('#avatar-dialog');
  var $close = $('#avatar-dialog-close');
  var $trigger = $('#hero-avatar-trigger');

  $trigger.on('click', function() {
    $dialog.addClass('active');
  });

  $close.on('click', function() {
    $dialog.removeClass('active');
  });

  $dialog.on('click', function(e) {
    if (e.target === this) {
      $dialog.removeClass('active');
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && $dialog.hasClass('active')) {
      $dialog.removeClass('active');
    }
  });
});
