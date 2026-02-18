/* ============ HOLIDAY ANIMATIONS ============
 * Uses the free Nager.Date API (https://date.nager.at) — no API key required.
 * Queries US, SA, IN, GB to cover Christian, Islamic, Hindu, and other holidays.
 * Fixed-date holidays (Halloween, Valentine's) are detected locally.
 * Plays a one-time celebration animation on page load if today is a holiday.
 */
(function() {
  if (sessionStorage.getItem('holiday-played')) return;

  var today = new Date();
  var todayStr = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');
  var month = today.getMonth() + 1;
  var day = today.getDate();

  var HOLIDAYS = {
    christmas:  { banner: 'Merry Christmas!',         icon: '\uD83C\uDF84' },
    easter:     { banner: 'Happy Easter!',             icon: '\uD83D\uDC23' },
    eid:        { banner: 'Eid Mubarak!',              icon: '\u262A\uFE0F' },
    halloween:  { banner: 'Happy Halloween!',          icon: '\uD83C\uDF83' },
    diwali:     { banner: 'Happy Diwali!',             icon: '\uD83E\uDE94' },
    newyear:    { banner: 'Happy New Year!',           icon: '\uD83C\uDF89' },
    valentine:  { banner: "Happy Valentine's Day!",    icon: '\uD83D\uDC95' },
    ramadan:    { banner: 'Ramadan Mubarak!',          icon: '\u262A\uFE0F' }
  };

  /* ---- Fixed-date holidays ---- */
  function getFixedHoliday() {
    if (month === 12 && day === 25) return 'christmas';
    if (month === 12 && day === 24) return 'christmas';
    if (month === 10 && day === 31) return 'halloween';
    if (month === 2  && day === 14) return 'valentine';
    if (month === 1  && day === 1)  return 'newyear';
    if (month === 12 && day === 31) return 'newyear';
    return null;
  }

  /* ---- Map API holiday name → animation type ---- */
  function detectType(name) {
    var n = name.toLowerCase();
    if (n.indexOf('christmas') !== -1 || n.indexOf('xmas') !== -1) return 'christmas';
    if (n.indexOf('easter') !== -1 || n.indexOf('good friday') !== -1) return 'easter';
    if (n.indexOf('ramadan') !== -1) return 'ramadan';
    if (n.indexOf('eid') !== -1) return 'eid';
    if (n.indexOf('diwali') !== -1 || n.indexOf('deepavali') !== -1) return 'diwali';
    if (n.indexOf('new year') !== -1 || n.indexOf("new year's") !== -1) return 'newyear';
    if (n.indexOf('valentine') !== -1) return 'valentine';
    if (n.indexOf('halloween') !== -1) return 'halloween';
    return null;
  }

  /* ---- Particle builders per holiday ---- */

  function buildChristmas(overlay) {
    for (var i = 0; i < 30; i++) {
      var f = document.createElement('div');
      f.className = 'holiday-snowflake';
      f.style.left = Math.random() * 100 + '%';
      f.style.animationDelay = (Math.random() * 3) + 's';
      f.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      var s = 4 + Math.random() * 8;
      f.style.width = f.style.height = s + 'px';
      overlay.appendChild(f);
    }
  }

  function buildEaster(overlay) {
    var colors = ['#FF6B6B','#4ECDC4','#FFE66D','#A8E6CF','#DDA0DD','#87CEEB','#F0E68C'];
    for (var i = 0; i < 18; i++) {
      var e = document.createElement('div');
      e.className = 'holiday-egg';
      e.style.left = (5 + Math.random() * 90) + '%';
      e.style.background = colors[Math.floor(Math.random() * colors.length)];
      e.style.animationDelay = (Math.random() * 2.5) + 's';
      e.style.animationDuration = (2 + Math.random() * 1.5) + 's';
      var w = 10 + Math.random() * 8;
      e.style.width = w + 'px';
      e.style.height = (w * 1.3) + 'px';
      overlay.appendChild(e);
    }
  }

  function buildEid(overlay) {
    var crescent = document.createElement('div');
    crescent.className = 'holiday-crescent';
    overlay.appendChild(crescent);

    for (var i = 0; i < 25; i++) {
      var star = document.createElement('div');
      star.className = 'holiday-eid-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = (0.2 + Math.random() * 1.5) + 's';
      var ss = 3 + Math.random() * 5;
      star.style.width = star.style.height = ss + 'px';
      overlay.appendChild(star);
    }

    for (var j = 0; j < 6; j++) {
      var lantern = document.createElement('div');
      lantern.className = 'holiday-lantern';
      lantern.style.left = (10 + Math.random() * 80) + '%';
      lantern.style.animationDelay = (0.3 + Math.random() * 1.5) + 's';
      lantern.style.animationDuration = (3 + Math.random() * 1.5) + 's';
      overlay.appendChild(lantern);
    }
  }

  function buildHalloween(overlay) {
    for (var i = 0; i < 8; i++) {
      var bat = document.createElement('div');
      bat.className = 'holiday-bat';
      bat.style.top = (10 + Math.random() * 50) + '%';
      bat.style.animationDelay = (Math.random() * 2.5) + 's';
      bat.style.animationDuration = (2 + Math.random() * 1.5) + 's';
      bat.style.fontSize = (16 + Math.random() * 14) + 'px';
      overlay.appendChild(bat);
    }
    for (var j = 0; j < 5; j++) {
      var p = document.createElement('div');
      p.className = 'holiday-pumpkin';
      p.style.left = (8 + Math.random() * 82) + '%';
      p.style.animationDelay = (0.5 + Math.random() * 1.5) + 's';
      p.style.fontSize = (20 + Math.random() * 16) + 'px';
      overlay.appendChild(p);
    }
  }

  function buildDiwali(overlay) {
    var glow = document.createElement('div');
    glow.className = 'holiday-diwali-glow';
    overlay.appendChild(glow);

    var sparkColors = ['#FFD700','#FF6B35','#FF4500','#FF8C00','#FFA500'];
    for (var i = 0; i < 28; i++) {
      var sp = document.createElement('div');
      sp.className = 'holiday-sparkle';
      var angle = (i / 28) * 360;
      sp.style.setProperty('--angle', angle + 'deg');
      sp.style.animationDelay = (0.4 + Math.random() * 0.8) + 's';
      sp.style.animationDuration = (1.5 + Math.random() * 1) + 's';
      sp.style.background = sparkColors[Math.floor(Math.random() * sparkColors.length)];
      var sz = 3 + Math.random() * 4;
      sp.style.width = sp.style.height = sz + 'px';
      overlay.appendChild(sp);
    }
  }

  function buildNewYear(overlay) {
    var colors = ['#FF6B6B','#4ECDC4','#FFE66D','#6366F1','#EC4899','#10B981','#F59E0B','#3B82F6'];
    for (var i = 0; i < 40; i++) {
      var c = document.createElement('div');
      c.className = 'holiday-confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = (Math.random() * 2) + 's';
      c.style.animationDuration = (2 + Math.random() * 2) + 's';
      var cw = 4 + Math.random() * 6;
      c.style.width = cw + 'px';
      c.style.height = (cw * (1.5 + Math.random())) + 'px';
      overlay.appendChild(c);
    }
  }

  function buildValentine(overlay) {
    var pinks = ['#e91e8e','#ff69b4','#ff1493','#ff85a2','#f8a2d5'];
    for (var i = 0; i < 20; i++) {
      var h = document.createElement('div');
      h.className = 'holiday-heart';
      h.style.left = (2 + Math.random() * 96) + '%';
      h.style.color = pinks[Math.floor(Math.random() * pinks.length)];
      h.style.fontSize = (12 + Math.random() * 22) + 'px';
      h.style.animationDelay = (Math.random() * 2) + 's';
      h.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';
      overlay.appendChild(h);
    }
  }

  function buildRamadan(overlay) {
    var night = document.createElement('div');
    night.className = 'holiday-ramadan-night';
    overlay.appendChild(night);

    var crescent = document.createElement('div');
    crescent.className = 'holiday-ramadan-crescent';
    overlay.appendChild(crescent);

    for (var i = 0; i < 35; i++) {
      var star = document.createElement('div');
      star.className = 'holiday-ramadan-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 80 + '%';
      star.style.animationDelay = (0.3 + Math.random() * 2) + 's';
      star.style.animationDuration = (2 + Math.random() * 1.5) + 's';
      var sz = 2 + Math.random() * 3;
      star.style.width = star.style.height = sz + 'px';
      overlay.appendChild(star);
    }

    for (var j = 0; j < 7; j++) {
      var fanous = document.createElement('div');
      fanous.className = 'holiday-fanous';
      fanous.style.left = (6 + j * 13 + Math.random() * 5) + '%';
      fanous.style.animationDelay = (0.2 + j * 0.25 + Math.random() * 0.2) + 's';
      var fs = 0.7 + Math.random() * 0.5;
      fanous.style.transform = 'scale(' + fs + ')';
      overlay.appendChild(fanous);
    }
  }

  var builders = {
    christmas: buildChristmas,
    easter:    buildEaster,
    eid:       buildEid,
    halloween: buildHalloween,
    diwali:    buildDiwali,
    newyear:   buildNewYear,
    valentine: buildValentine,
    ramadan:   buildRamadan
  };

  /* ---- Play animation ---- */
  function play(type) {
    sessionStorage.setItem('holiday-played', '1');

    var info = HOLIDAYS[type];
    if (!info) return;

    var overlay = document.createElement('div');
    overlay.className = 'holiday-overlay holiday-' + type;
    document.body.appendChild(overlay);

    var banner = document.createElement('div');
    banner.className = 'holiday-banner';
    banner.innerHTML = '<span class="holiday-banner-icon">' + info.icon + '</span> ' + info.banner;
    overlay.appendChild(banner);

    if (builders[type]) builders[type](overlay);

    setTimeout(function() {
      overlay.classList.add('fade-out');
    }, 4500);
    setTimeout(function() {
      if (overlay.parentNode) overlay.remove();
    }, 5800);
  }

  /* ---- Fetch from Nager.Date API ---- */
  function fetchAndCheck() {
    var year = today.getFullYear();
    var countries = ['US', 'SA', 'IN', 'GB'];
    var fetches = countries.map(function(cc) {
      return fetch('https://date.nager.at/api/v3/PublicHolidays/' + year + '/' + cc)
        .then(function(r) { return r.ok ? r.json() : []; })
        .catch(function() { return []; });
    });

    Promise.all(fetches).then(function(results) {
      var all = [];
      for (var i = 0; i < results.length; i++) all = all.concat(results[i]);

      var todayList = all.filter(function(h) { return h.date === todayStr; });

      for (var j = 0; j < todayList.length; j++) {
        var t = detectType(todayList[j].name);
        if (t) { play(t); return; }
      }
    });
  }

  /* ---- Entry point — runs once after full page load ---- */
  function run() {
    var fixed = getFixedHoliday();
    if (fixed) { play(fixed); return; }
    fetchAndCheck();
  }

  if (document.readyState === 'complete') {
    setTimeout(run, 1000);
  } else {
    window.addEventListener('load', function() {
      setTimeout(run, 1000);
    });
  }

  /*
  // TESTING: uncomment to cycle through all animations with 5s gap
  function testAll() {
    sessionStorage.removeItem('holiday-played');
    var types = ['christmas','easter','eid','halloween','diwali','newyear','valentine','ramadan'];
    types.forEach(function(type, i) {
      setTimeout(function() {
        sessionStorage.removeItem('holiday-played');
        play(type);
      }, i * 5000);
    });
  }
  */
})();
