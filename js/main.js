// Elizabeth Vijan | Tackett Team, eXp Realty - navigation, dropdown and contact-form helpers
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Contact page: preselect the interest from ?interest=valuation|market-report|buy|sell|invest
  // (the form itself is a Netlify Form that posts normally to thank-you.html)
  var interest = document.getElementById('interest');
  if (interest) {
    var wanted = (new URLSearchParams(window.location.search).get('interest') || '').toLowerCase();
    var map = { valuation: 'Free Home Valuation', 'market-report': 'Chaparral Park Market Report', buy: 'Buying a Home', sell: 'Selling a Home', invest: 'Investment Property' };
    if (map[wanted]) { interest.value = map[wanted]; }
  }

  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');

  function closeMenu() {
    if (!links || !toggle) return;
    links.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-open', isOpen);
    });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  // Dropdowns (click / tap / keyboard friendly)
  document.querySelectorAll('.has-dropdown').forEach(function (wrap) {
    var btn = wrap.querySelector('.nav-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = wrap.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    wrap.addEventListener('mouseenter', function () { if (window.innerWidth > 960) btn.setAttribute('aria-expanded', 'true'); });
    wrap.addEventListener('mouseleave', function () { if (window.innerWidth > 960) { btn.setAttribute('aria-expanded', 'false'); wrap.classList.remove('is-open'); } });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-dropdown.is-open').forEach(function (w) {
      if (!w.contains(e.target) && window.innerWidth > 960) {
        w.classList.remove('is-open');
        var b = w.querySelector('.nav-toggle'); if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // FAQ: open the matching accordion when a page is visited with #faq-... or a question is linked
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') { target.open = true; }
  }
});
