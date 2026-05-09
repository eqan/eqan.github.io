(function () {
  var searchRoot = document.querySelector('.site-search');
  var toggle = document.getElementById('site-search-toggle');
  var panel = document.getElementById('site-search-panel');
  var input = document.getElementById('site-search-input');
  var summary = document.getElementById('site-search-summary');
  var results = document.getElementById('site-search-results');

  if (!searchRoot || !toggle || !panel || !input || !summary || !results) return;

  var searchableSections = [];
  var maxResults = 8;

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

  function findSectionForElement(element) {
    var modalId = element.id || element.closest('[id]')?.id;
    var modalTrigger = modalId ? document.querySelector('main a[href="#' + modalId + '"]') : null;
    var section = modalTrigger?.closest('.section') || element.closest('.section');

    return section?.id || '';
  }

  function buildIndex() {
    var entries = Array.prototype.slice.call(document.querySelectorAll('main .section, .sections-nav-container, #modals-container > .modal, #profile-modals-container > .modal'));

    searchableSections = entries.map(function (entry) {
      var isNav = entry.classList.contains('sections-nav-container');
      var isModal = entry.classList.contains('modal');
      var title = normalize(entry.querySelector('.section-title, .hero-headline, .project-modal-title, .profile-modal-title')?.textContent);
      var text = normalize(entry.innerText);
      var targetId = isNav ? 'section-10' : findSectionForElement(entry);

      if (!title) {
        title = isNav ? 'Contact Links' : (isModal ? 'Project Details' : 'Top');
      }

      return {
        id: targetId || entry.id,
        title: title,
        text: text,
        haystack: (title + ' ' + text).toLowerCase()
      };
    }).filter(function (item) {
      return item.id && item.text;
    });
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

    if (!matches.length) {
      renderEmpty('No matches found. Try a broader keyword.');
      return;
    }

    summary.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' found';
    results.innerHTML = matches.map(function (match) {
      var item = match.item;
      var snippet = getSnippet(item.text, query);

      return '<a class="site-search-result" href="#' + item.id + '">' +
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
    if (event.target.closest('.site-search-result')) {
      closeSearch();
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
