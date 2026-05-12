/* Loads holiday animation assets only on dates where they can be used. */
(function () {
  'use strict';

  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var year = today.getFullYear();

  function toHijri(gY, gM, gD) {
    var a = Math.floor((14 - gM) / 12);
    var y = gY + 4800 - a;
    var m = gM + 12 * a - 3;
    var jd = gD + Math.floor((153 * m + 2) / 5) + 365 * y +
      Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    var l = jd - 1948440 + 10632;
    var n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    var j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
      Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
    l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
      Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
    var hM = Math.floor((24 * l) / 709);
    var hD = l - Math.floor((709 * hM) / 24);
    return { month: hM, day: hD };
  }

  function isDiwaliWindow(gY, gM, gD) {
    if (gM !== 10 && gM !== 11) return false;

    var knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
    var synodicMonth = 29.530588853;
    var todayUtc = Date.UTC(gY, gM - 1, gD);
    var daysSince = (todayUtc - knownNewMoon) / 86400000;
    var lunation = Math.round(daysSince / synodicMonth);

    for (var i = lunation - 1; i <= lunation + 1; i++) {
      var nm = new Date(knownNewMoon + i * synodicMonth * 86400000);
      var nmM = nm.getUTCMonth();
      var nmD = nm.getUTCDate();
      var inWindow = (nmM === 9 && nmD >= 12) || (nmM === 10 && nmD <= 16);
      var diff = Math.abs((todayUtc - Date.UTC(nm.getUTCFullYear(), nmM, nmD)) / 86400000);
      if (inWindow && diff <= 1) return true;
    }

    return false;
  }

  function canHaveLocalHoliday() {
    if (month === 12 && day >= 20 && day <= 31) return true;
    if (month === 1 && day === 1) return true;
    if (month === 2 && day === 14) return true;
    if (month === 10 && day === 31) return true;
    if (isDiwaliWindow(year, month, day)) return true;

    var hijri = toHijri(year, month, day);
    if (hijri.month === 9) return true;
    if (hijri.month === 10 && hijri.day <= 3) return true;
    if (hijri.month === 12 && hijri.day >= 10 && hijri.day <= 12) return true;

    return false;
  }

  function isEasterWindow() {
    var start = new Date(year, 2, 15).getTime();
    var end = new Date(year, 3, 30, 23, 59, 59).getTime();
    var now = today.getTime();
    return now >= start && now <= end;
  }

  function loadHolidayAssets() {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = './CSS/holiday-animations.css';
    document.head.appendChild(css);

    var script = document.createElement('script');
    script.src = './JS/holidays.js';
    script.defer = true;
    document.body.appendChild(script);
  }

  if (sessionStorage.getItem('holiday-played')) return;
  if (canHaveLocalHoliday() || isEasterWindow()) {
    loadHolidayAssets();
  }
})();
