(function () {
  var F = window.FITNESS;
  var root = document.getElementById('app');
  var view = window.innerWidth < 720 ? 'phone' : 'paper';

  function paperPages() {
    var pages = [];
    F.workouts.forEach(function (w) {
      var split = w.groups.length > 2 ? 1 : w.groups.length;
      var first = w.groups.slice(0, split);
      var rest = w.groups.slice(split);
      pages.push({
        kicker: w.kicker, title: w.title, duration: w.duration, subtitle: w.subtitle,
        showWarm: true, warmLabel: w.warmLabel, warmText: w.warmText, mainLabel: w.mainLabel,
        groups: first, showFin: rest.length === 0, finLabel: w.finLabel, finText: w.finText,
        footerHead: rest.length ? 'Continues.' : 'Complete.',
        footer: rest.length ? 'Rest of the session on the next page.' : w.footer,
        footer2: rest.length ? '' : w.footer2
      });
      if (rest.length) {
        pages.push({
          kicker: w.kicker + ' · continued', title: w.title, duration: w.duration, subtitle: '',
          showWarm: false, warmLabel: '', warmText: '', mainLabel: w.mainLabel + ' · continued',
          groups: rest, showFin: true, finLabel: w.finLabel, finText: w.finText,
          footerHead: 'Complete.', footer: w.footer, footer2: w.footer2
        });
      }
    });
    return pages;
  }

  function groupHtml(grp, paper) {
    var items = (grp.items || []).map(function (ex) {
      var loadLine = (ex.choices && ex.choices.length ? 'Load: ' + ex.choices.join(' / ') : '') +
        (ex.freeWeight ? (ex.choices && ex.choices.length ? ' — or your own' : 'Load: your choice') : '');
      if (paper) {
        return (
          '<div style="display:grid;grid-template-columns:28px 1fr 150px;gap:8px;align-items:start">' +
            '<div class="ex-code">' + F.esc(ex.code) + '</div>' +
            '<div>' +
              '<div style="font-size:15.5px;font-weight:700;line-height:1.25">' + F.esc(ex.name) + '</div>' +
              (ex.note ? '<div style="font-size:13px;line-height:1.45;color:var(--color-neutral-700)">' + F.esc(ex.note) + '</div>' : '') +
              '<div style="font-size:13.5px;line-height:1.5;color:var(--color-neutral-800);text-wrap:pretty">' + F.esc(ex.form) + '</div>' +
            '</div>' +
            '<div>' +
              '<div style="font-size:13.5px;font-weight:700;color:var(--color-accent-2-800)">' + F.esc(ex.metrics || '') + '</div>' +
              (loadLine ? '<div style="font-size:12.5px;color:var(--color-neutral-700);margin-top:4px">' + F.esc(loadLine) + '</div>' : '') +
            '</div>' +
          '</div>'
        );
      }
      return (
        '<div>' +
          '<div style="display:flex;align-items:baseline;gap:10px">' +
            '<div class="ex-code">' + F.esc(ex.code) + '</div>' +
            '<div style="font-size:16px;font-weight:700;line-height:1.25">' + F.esc(ex.name) + '</div>' +
          '</div>' +
          '<div style="font-size:13.5px;font-weight:700;color:var(--color-accent-2-800)">' + F.esc(ex.metrics || '') + '</div>' +
          (ex.note ? '<div style="font-size:13px;line-height:1.45;color:var(--color-neutral-700)">' + F.esc(ex.note) + '</div>' : '') +
          '<div style="font-size:13.5px;line-height:1.5;color:var(--color-neutral-800);text-wrap:pretty">' + F.esc(ex.form) + '</div>' +
          (loadLine ? '<div style="font-size:13px;color:var(--color-neutral-700)">' + F.esc(loadLine) + '</div>' : '') +
        '</div>'
      );
    }).join('');
    return (
      '<div class="sheet-group">' +
        (grp.label ? '<div class="kicker-sm" style="color:var(--color-accent-2-800)">' + F.esc(grp.label) + '</div>' : '') +
        items +
      '</div>'
    );
  }

  function render() {
    var pages = paperPages();
    var paper = pages.map(function (pg) {
      return (
        '<section class="page">' +
          '<header style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px;margin-bottom:10px">' +
            '<div>' +
              '<div class="kicker" style="margin-bottom:9px">' + F.esc(pg.kicker) + '</div>' +
              '<h1 class="display" style="font-size:28px">' + F.esc(pg.title) + '</h1>' +
            '</div>' +
            '<div class="duration" style="height:34px;padding:0 20px;font-size:13.5px">' + F.esc(pg.duration) + '</div>' +
          '</header>' +
          (pg.subtitle ? '<p style="font-size:14px;line-height:1.5;color:var(--color-neutral-800);margin:0 0 10px">' + F.esc(pg.subtitle) + '</p>' : '') +
          (pg.showWarm
            ? '<section style="display:grid;grid-template-columns:152px 1fr;gap:16px;align-items:start"><div class="kicker-sm" style="color:var(--color-neutral-700);padding-top:2px;white-space:nowrap">' + F.esc(pg.warmLabel) + '</div><div style="font-size:14px;line-height:1.5;color:var(--color-neutral-800)">' + F.esc(pg.warmText) + '</div></section><div style="height:2px;background:color-mix(in srgb, var(--color-accent-2-600) 40%, transparent);border-radius:999px"></div>'
            : '') +
          '<div class="kicker-sm" style="color:var(--color-neutral-700);margin-bottom:9px">' + F.esc(pg.mainLabel) + '</div>' +
          '<div class="stack-tight">' + pg.groups.map(function (g) { return groupHtml(g, true); }).join('') + '</div>' +
          (pg.showFin
            ? '<div class="panel-warm" style="padding:12px 14px;border-radius:var(--radius-lg)"><div class="kicker-sm" style="color:var(--color-accent-2-800)">' + F.esc(pg.finLabel) + '</div><div style="font-size:14.5px;line-height:1.5;color:var(--color-neutral-800)">' + F.esc(pg.finText) + '</div></div>'
            : '') +
          '<div style="font-size:13px;color:var(--color-neutral-700);line-height:1.5;margin-top:auto">' + F.esc(pg.footerHead) + ' ' + F.esc(pg.footer) + (pg.footer2 ? ' ' + F.esc(pg.footer2) : '') + '</div>' +
        '</section>'
      );
    }).join('');

    var log = (F.logRows || []).map(function (r) {
      return '<tr><td>' + F.esc(r.date) + '</td><td>' + F.esc(r.kb) + '</td><td>' + F.esc(r.grip) + '</td><td>' + F.esc(r.res) + '</td><td>' + F.esc(r.note) + '</td></tr>';
    }).join('');

    var phone = F.workouts.map(function (w) {
      var loadLineFn = function (ex) {
        return (ex.choices && ex.choices.length ? 'Load: ' + ex.choices.join(' / ') : '') +
          (ex.freeWeight ? (ex.choices && ex.choices.length ? ' — or your own' : 'Load: your choice') : '');
      };
      return (
        '<section class="stack">' +
          '<header>' +
            '<div class="kicker" style="margin-bottom:8px">' + F.esc(w.kicker) + '</div>' +
            '<h2 class="display display-lg">' + F.esc(w.title) + '</h2>' +
            '<div class="duration" style="margin-top:10px;display:inline-flex">' + F.esc(w.duration) + '</div>' +
          '</header>' +
          (w.subtitle ? '<p class="lede">' + F.esc(w.subtitle) + '</p>' : '') +
          (w.warmText ? '<section class="panel panel-warm"><div class="kicker-sm" style="color:var(--color-accent-2-800)">' + F.esc(w.warmLabel) + '</div><div style="font-size:14px;line-height:1.5;color:var(--color-neutral-800)">' + F.esc(w.warmText) + '</div></section>' : '') +
          w.groups.map(function (g) { return groupHtml(g, false); }).join('') +
          (w.finText ? '<div class="panel-warm" style="padding:12px 14px;border-radius:var(--radius-lg)"><div class="kicker-sm" style="color:var(--color-accent-2-800)">' + F.esc(w.finLabel) + '</div><div style="font-size:14.5px;line-height:1.5">' + F.esc(w.finText) + '</div></div>' : '') +
          '<div style="font-size:13px;color:var(--color-neutral-700);line-height:1.5">' + F.esc(w.footer || '') + (w.footer2 ? ' ' + F.esc(w.footer2) : '') + '</div>' +
        '</section>'
      );
    }).join('<hr class="hr">') +
      '<section class="stack" style="border-top:2px solid color-mix(in srgb, var(--color-accent-2-600) 40%, transparent);padding-top:18px">' +
        '<h2 class="display" style="font-size:24px">Notes</h2>' +
        '<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:7px;font-size:14.5px;line-height:1.5;color:var(--color-neutral-800)">' +
          '<li>Both movements pyramiding on the same day provides joint-friendly load distribution.</li>' +
          '<li>No external rest days needed; an active job provides recovery stimulus.</li>' +
          '<li>If fatigue is high, reduce reps by 2–3 that session — it still counts as a completed workout.</li>' +
          '<li>Swings are explosive; controlled on the lowering phase.</li>' +
          '<li>Grip work builds from high reps at low resistance. Never sacrifice form for speed.</li>' +
        '</ul>' +
        '<p style="font-size:13.5px;line-height:1.5;color:var(--color-neutral-700);margin:0">The progression log is on the printed sheet — the tracker counts your ladder sessions on the phone.</p>' +
      '</section>';

    root.innerHTML =
      '<div class="viewbar no-print">' +
        '<a class="back" href="index.html">← Hub</a>' +
        '<span class="lab">View</span>' +
        '<button type="button" class="pill' + (view === 'paper' ? ' on' : '') + '" data-view="paper">Paper</button>' +
        '<button type="button" class="pill' + (view === 'phone' ? ' on' : '') + '" data-view="phone">Phone</button>' +
      '</div>' +
      '<div id="paper" class="paper' + (view === 'paper' ? '' : ' hidden') + '">' + paper +
        '<section class="page">' +
          '<header><div class="kicker" style="margin-bottom:9px">Ladders</div><h1 class="display" style="font-size:28px">Progression log</h1></header>' +
          '<p style="font-size:14px;line-height:1.5;color:var(--color-neutral-800)">Session-counted. The tracker is the live count; this sheet is the paper record.</p>' +
          '<table class="table"><thead><tr><th>Date</th><th>KB peak</th><th>Grip peak</th><th>Resistance</th><th>Note</th></tr></thead><tbody>' + log + '</tbody></table>' +
        '</section>' +
      '</div>' +
      '<div id="phone" class="phone-sheet' + (view === 'phone' ? '' : ' hidden') + '">' + phone + '</div>';
  }

  root.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-view]');
    if (!btn) return;
    view = btn.getAttribute('data-view');
    render();
  });

  render();
})();
