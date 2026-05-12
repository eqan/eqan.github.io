(function () {
  var searchRoot = document.querySelector('.site-search');
  var toggle = document.getElementById('site-search-toggle');
  var panel = document.getElementById('site-search-panel');
  var input = document.getElementById('site-search-input');
  var summary = document.getElementById('site-search-summary');
  var results = document.getElementById('site-search-results');

  if (!searchRoot || !toggle || !panel || !input || !summary || !results) return;

  var searchableSections = [];
  var currentMatches = [];
  var maxResults = 8;
  var HIGHLIGHT_DURATION_MS = 1300;

  function normalize(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[char];
    });
  }

  function highlight(text, query) {
    var escapedText = escapeHtml(text);
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);

    terms.forEach(function (term) {
      var escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      escapedText = escapedText.replace(new RegExp('(' + escapedTerm + ')', 'ig'), '<mark>$1</mark>');
    });

    return escapedText;
  }

  function findModalTrigger(modal) {
    var modalId = modal.id;
    if (!modalId) return null;
    return document.querySelector('main a[href="#' + modalId + '"][data-bs-toggle="modal"]');
  }

  function findParentSectionForModal(modal) {
    var trigger = findModalTrigger(modal);
    var section = trigger ? trigger.closest('.section') : null;
    return section ? section.id : '';
  }

  function buildIndex() {
    var entries = Array.prototype.slice.call(document.querySelectorAll('main .section, .sections-nav-container, #modals-container > .modal, #profile-modals-container > .modal'));

    searchableSections = entries.map(function (entry) {
      var isNav = entry.classList.contains('sections-nav-container');
      var isModal = entry.classList.contains('modal');
      var title = normalize(entry.querySelector('.section-title, .hero-headline, .project-modal-title, .profile-modal-title')?.textContent);
      var text = normalize(entry.innerText);

      var targetId;
      var highlightEl;
      if (isNav) {
        targetId = 'section-10';
        highlightEl = document.getElementById('section-10');
      } else if (isModal) {
        targetId = findParentSectionForModal(entry) || entry.id;
        var trigger = findModalTrigger(entry);
        highlightEl = trigger
          ? (trigger.closest('.domain-card, .service-card, .project-card, .honor-card, .exp-card, .edu-card, .contact-card, .project-item, .service-item, .expertise-item') || trigger)
          : document.getElementById(targetId);
      } else {
        targetId = entry.id;
        highlightEl = entry;
      }

      if (!title) {
        title = isNav ? 'Contact Links' : (isModal ? 'Project Details' : 'Top');
      }

      return {
        id: targetId,
        title: title,
        text: text,
        haystack: (title + ' ' + text).toLowerCase(),
        highlightEl: highlightEl,
        isSection: !isModal && !isNav
      };
    }).filter(function (item) {
      return item.id && item.text;
    });
  }

  function findBestHighlightTarget(item, query) {
    var base = item.highlightEl;
    if (!base) return null;
    if (!item.isSection) return base;

    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return base;

    var candidates = base.querySelectorAll(
      '.exp-card, .honor-card, .edu-card, .project-item, .service-item, .expertise-item, .contact-card, .testimonial-card, .about-stats-card, .hero-content'
    );

    for (var i = 0; i < candidates.length; i++) {
      var text = (candidates[i].innerText || '').toLowerCase();
      var matchesAll = terms.every(function (t) { return text.indexOf(t) !== -1; });
      if (matchesAll) return candidates[i];
    }

    return base.querySelector('.section-body') || base;
  }

  function clearHighlights() {
    var existing = document.querySelectorAll('.search-glow-overlay');
    for (var i = 0; i < existing.length; i++) {
      if (existing[i].parentNode) existing[i].parentNode.removeChild(existing[i]);
    }
  }

  function readCorners(el) {
    var s = window.getComputedStyle(el);
    return [
      s.borderTopLeftRadius,
      s.borderTopRightRadius,
      s.borderBottomRightRadius,
      s.borderBottomLeftRadius
    ];
  }

  function hasRoundedCorners(corners) {
    for (var i = 0; i < corners.length; i++) {
      if (corners[i] && corners[i] !== '0px') return true;
    }
    return false;
  }

  function resolveVisualShape(el) {
    if (!el) return null;
    var rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    var corners = readCorners(el);
    if (hasRoundedCorners(corners)) {
      return { rect: rect, corners: corners };
    }

    var candidates = el.querySelectorAll(
      ':scope > .domain-card, :scope > .service-card, :scope > .project-card, ' +
      ':scope > a > .domain-card, :scope > a > .service-card, :scope > a > .project-card, ' +
      ':scope > a.domain-card, :scope > a.service-card, :scope > a.project-card'
    );
    for (var i = 0; i < candidates.length; i++) {
      var cRect = candidates[i].getBoundingClientRect();
      if (!cRect.width || !cRect.height) continue;
      var cCorners = readCorners(candidates[i]);
      if (hasRoundedCorners(cCorners)) {
        return { rect: cRect, corners: cCorners };
      }
    }

    return { rect: rect, corners: corners };
  }

  function applyHighlight(el) {
    if (!el) return;
    clearHighlights();

    var isAmbient = el.classList.contains('section') || el.classList.contains('section-body');
    var rectFallback = el.getBoundingClientRect();
    if (!rectFallback.width || !rectFallback.height) return;

    var rect = rectFallback;
    var corners = ['0px', '0px', '0px', '0px'];

    if (!isAmbient) {
      var shape = resolveVisualShape(el);
      if (shape) {
        rect = shape.rect;
        corners = shape.corners;
      }
      if (rect.height > window.innerHeight * 0.65 && !hasRoundedCorners(corners)) {
        isAmbient = true;
      }
    }

    var overlay = document.createElement('div');
    overlay.className = 'search-glow-overlay' + (isAmbient ? ' search-glow-overlay--ambient' : '');
    overlay.style.left = (window.scrollX + rect.left) + 'px';
    overlay.style.top = (window.scrollY + rect.top) + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';

    if (!isAmbient && hasRoundedCorners(corners)) {
      overlay.style.borderRadius = corners.join(' ');
    }

    document.body.appendChild(overlay);

    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, HIGHLIGHT_DURATION_MS + 250);
  }

  function navigateToMatch(item, query) {
    var target = findBestHighlightTarget(item, query);
    if (!target) return;

    try {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      target.scrollIntoView();
    }

    var settled = false;
    var settle = function () {
      if (settled) return;
      settled = true;
      applyHighlight(target);
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', settle, { once: true });
      setTimeout(settle, 1100);
    } else {
      setTimeout(settle, 700);
    }
  }

  function getSnippet(text, query) {
    var lowerText = text.toLowerCase();
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var firstMatch = terms.reduce(function (best, term) {
      var index = lowerText.indexOf(term);
      return index !== -1 && index < best ? index : best;
    }, lowerText.length);

    if (firstMatch === lowerText.length) firstMatch = 0;

    var start = Math.max(0, firstMatch - 55);
    var end = Math.min(text.length, firstMatch + 120);
    var snippet = text.slice(start, end);

    return (start > 0 ? '...' : '') + snippet + (end < text.length ? '...' : '');
  }

  function scoreResult(item, terms) {
    return terms.reduce(function (score, term) {
      if (item.title.toLowerCase().indexOf(term) !== -1) score += 5;
      if (item.haystack.indexOf(term) !== -1) score += 1;
      return score;
    }, 0);
  }

  function renderEmpty(message) {
    summary.textContent = message;
    results.innerHTML = '';
  }

  function runSearch() {
    var query = normalize(input.value).toLowerCase();

    if (!query) {
      currentMatches = [];
      renderEmpty('Type to search across the portfolio.');
      return;
    }

    var terms = query.split(/\s+/).filter(Boolean);
    var matches = searchableSections.map(function (item) {
      return {
        item: item,
        score: scoreResult(item, terms)
      };
    }).filter(function (match) {
      return match.score > 0 && terms.every(function (term) {
        return match.item.haystack.indexOf(term) !== -1;
      });
    }).sort(function (a, b) {
      return b.score - a.score;
    }).slice(0, maxResults);

    currentMatches = matches;

    if (!matches.length) {
      renderEmpty('No matches found. Try a broader keyword.');
      return;
    }

    summary.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' found';
    results.innerHTML = matches.map(function (match, index) {
      var item = match.item;
      var snippet = getSnippet(item.text, query);

      return '<a class="site-search-result" href="#' + item.id + '" data-result-index="' + index + '">' +
        '<span class="site-search-result-title">' + highlight(item.title, query) + '</span>' +
        '<span class="site-search-result-snippet">' + highlight(snippet, query) + '</span>' +
      '</a>';
    }).join('');
  }

  function openSearch() {
    searchRoot.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    buildIndex();
    setTimeout(function () {
      input.focus();
    }, 50);
  }

  function closeSearch() {
    searchRoot.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', function () {
    if (searchRoot.classList.contains('is-open')) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  input.addEventListener('input', runSearch);

  results.addEventListener('click', function (event) {
    var link = event.target.closest('.site-search-result');
    if (!link) return;

    event.preventDefault();
    var indexAttr = link.getAttribute('data-result-index');
    var idx = indexAttr ? parseInt(indexAttr, 10) : -1;
    var match = idx >= 0 ? currentMatches[idx] : null;
    var query = normalize(input.value).toLowerCase();

    closeSearch();

    if (match && match.item) {
      requestAnimationFrame(function () {
        navigateToMatch(match.item, query);
      });
    } else {
      var fallbackId = link.getAttribute('href');
      if (fallbackId) window.location.hash = fallbackId;
    }
  });

  document.addEventListener('click', function (event) {
    if (!searchRoot.contains(event.target)) {
      closeSearch();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeSearch();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openSearch();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(buildIndex, 0);
  });
})();
