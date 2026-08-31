(function () {
  var F = window.FITNESS;
  var root = document.getElementById('app');
  var today = F.days[new Date().getDay()];
  var day = today;

  function ladderMeta(it) {
    if (!it.ladder) return '';
    var raw = F.store.getRaw('brad-ladder-session');
    var n = parseInt(raw, 10);
    if (!(n >= 1)) return '';
    var peak = 4 + (((n - 1) % 16) + 1);
    return 'Session ' + n + ' · peak ' + peak;
  }

  function render() {
    var items = (F.offer[day] || []).map(function (it) {
      var main = !!it.main;
      var meta = ladderMeta(it);
      return (
        '<a class="card-link ' + (main ? 'main' : 'side') + '" href="' + F.esc(it.href) + '">' +
          '<div>' +
            '<div class="card-kicker">' + F.esc(it.kicker) + '</div>' +
            '<div class="card-title">' + F.esc(it.title) + '</div>' +
            '<div class="card-body">' + F.esc(it.body) + '</div>' +
          '</div>' +
          (meta ? '<div class="card-meta">' + F.esc(meta) + '</div>' : '<div class="card-meta"></div>') +
        '</a>'
      );
    }).join('');

    var note = F.notes[day] || '';
    var options = F.days.slice(1).concat(F.days[0]).map(function (d) {
      return '<option value="' + F.esc(d) + '"' + (d === day ? ' selected' : '') + '>' + F.esc(d) + '</option>';
    }).join('');

    var guides = F.guides.map(function (doc) {
      return (
        '<a class="doc-link plain" href="' + F.esc(doc.href) + '">' +
          '<div class="title">' + F.esc(doc.title) + '</div>' +
          '<div class="meta">' + F.esc(doc.slots) + '</div>' +
        '</a>'
      );
    }).join('');

    var sheets = F.sheets.map(function (doc) {
      return (
        '<a class="doc-link sage" href="' + F.esc(doc.href) + '">' +
          '<div class="title">' + F.esc(doc.title) + '</div>' +
          '<div class="meta">' + F.esc(doc.pages) + '</div>' +
        '</a>'
      );
    }).join('');

    root.innerHTML =
      '<div class="wrap">' +
        '<header class="hub-head">' +
          '<div>' +
            '<div class="kicker">' + (day === today ? 'Today' : 'On offer') + '</div>' +
            '<h1 class="display display-xl">' + F.esc(day) + '</h1>' +
          '</div>' +
          '<label class="day-label">' +
            '<span>Showing</span>' +
            '<select class="day-select" id="day">' + options + '</select>' +
          '</label>' +
        '</header>' +
        '<section class="offer">' + items + '</section>' +
        (note
          ? '<section class="note"><div class="kicker-sm">Before you do both</div><p>' + F.esc(note) + '</p></section>'
          : '') +
        '<details class="menu">' +
          '<summary>Everything else — guides, sheets, other days</summary>' +
          '<div class="menu-body">' +
            '<a class="doc-link featured" href="movements.html">' +
              '<div>' +
                '<div class="display display-sm" style="margin-bottom:4px">Movement Guide</div>' +
                '<div style="font-size:13.5px;line-height:1.45;color:var(--color-neutral-800);text-wrap:pretty">Numbered steps per movement, what to watch for, and a Read link where one has been checked.</div>' +
              '</div>' +
              '<div class="meta" style="font-size:13px;font-weight:700;color:var(--color-accent-700)">54 movements</div>' +
            '</a>' +
            '<div class="docs-grid">' +
              '<div class="kicker-sm" style="color:var(--color-neutral-700)">Form guides</div>' +
              guides +
            '</div>' +
            '<div class="docs-grid">' +
              '<div class="kicker-sm" style="color:var(--color-neutral-700)">Printable sheets</div>' +
              sheets +
            '</div>' +
          '</div>' +
        '</details>' +
        '<footer class="site-foot">' +
          '<div>The day decides what is on offer. It never decides the target — the ladder advances when you log a session, not when a day passes.</div>' +
          '<div>Built from Cal\'s briefs and form guides (Fitness Architect). Where a guide and a sheet disagree, the guide is his words and wins.</div>' +
        '</footer>' +
      '</div>';

    document.getElementById('day').addEventListener('change', function (e) {
      day = e.target.value;
      render();
    });
  }

  render();
})();
