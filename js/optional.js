(function () {
  var F = window.FITNESS;
  var root = document.getElementById('app');
  var view = window.innerWidth < 720 ? 'phone' : 'paper';

  function pageHtml(pg, paper) {
    var blocks = (pg.blocks || []).map(function (b) {
      var items = (b.items || []).map(function (it) {
        return (
          '<div style="display:grid;grid-template-columns:1fr 118px;gap:12px;align-items:baseline;padding-bottom:6px;border-bottom:1px solid color-mix(in srgb, var(--color-neutral-400) 45%, transparent)">' +
            '<div>' +
              '<div style="font-size:15px;font-weight:700;line-height:1.3">' + F.esc(it.name) + '</div>' +
              (it.detail ? '<div style="font-size:12.5px;line-height:1.45;color:var(--color-neutral-800);margin-top:2px;text-wrap:pretty">' + F.esc(it.detail) + '</div>' : '') +
            '</div>' +
            (it.time ? '<div style="font-size:13px;font-weight:700;color:var(--color-accent-700);text-align:right">' + F.esc(it.time) + '</div>' : '') +
          '</div>'
        );
      }).join('');
      return (
        '<section style="display:grid;grid-template-columns:minmax(120px,152px) 1fr;gap:18px;align-items:start">' +
          '<div>' +
            '<div class="kicker-sm" style="color:var(--color-neutral-700);padding-top:2px">' + F.esc(b.label) + '</div>' +
            (b.dur ? '<div class="kicker-sm" style="color:var(--color-neutral-700);margin-top:2px">' + F.esc(b.dur) + '</div>' : '') +
            (b.sub ? '<div style="font-size:11.5px;line-height:1.4;color:var(--color-accent-700);margin-top:4px">' + F.esc(b.sub) + '</div>' : '') +
          '</div>' +
          '<div style="display:flex;flex-direction:column;gap:7px">' + items + '</div>' +
        '</section>'
      );
    }).join('');

    var record = '';
    if (pg.record) {
      var r = pg.record;
      var boxes = (r.boxes || []).map(function () {
        return '<span style="width:26px;height:26px;border-radius:8px;border:2px solid var(--color-accent-600);display:inline-block"></span>';
      }).join('');
      record =
        '<section style="display:grid;grid-template-columns:minmax(120px,152px) 1fr;gap:18px;align-items:start;background:var(--color-accent-2-100);border-radius:var(--radius-lg);padding:13px 16px">' +
          '<div class="kicker-sm" style="color:var(--color-accent-2-800);padding-top:4px">Record</div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px 26px">' +
            (r.boxes ? '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><div style="font-size:13px;color:var(--color-accent-2-900);width:172px;flex:none">' + F.esc(r.boxLabel || '') + '</div>' + boxes + (r.optional ? '<span style="width:26px;height:26px;border-radius:8px;border:2px dashed var(--color-accent-600);display:inline-block"></span><span style="font-size:12px;color:var(--color-neutral-700)">optional 4th</span>' : '') + '</div>' : '') +
            (r.write ? '<div style="display:flex;align-items:center;gap:10px"><div style="font-size:13px;color:var(--color-accent-2-900);width:128px;flex:none">' + F.esc(r.write) + '</div><span style="width:96px;height:26px;border-radius:8px;border:2px solid var(--color-accent-600);display:inline-block"></span></div>' : '') +
            (r.yesno ? '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><div style="font-size:13px;line-height:1.35;color:var(--color-accent-2-900);width:196px;flex:none;text-wrap:pretty">' + F.esc(r.yesno) + '</div><span style="width:26px;height:26px;border-radius:8px;border:2px solid var(--color-accent-600);display:inline-block"></span><span style="font-size:13px;font-weight:700">Yes</span><span style="width:26px;height:26px;border-radius:8px;border:2px solid var(--color-accent-600);margin-left:8px;display:inline-block"></span><span style="font-size:13px;font-weight:700">No</span></div>' : '') +
            (r.line ? '<div style="display:flex;flex-direction:column;gap:4px;flex-basis:100%"><div style="font-size:13px;color:var(--color-accent-2-900)">' + F.esc(r.line) + '</div><span style="height:24px;border-bottom:2px solid var(--color-accent-600)"></span></div>' : '') +
          '</div>' +
        '</section>';
    }

    var bench = '';
    if (pg.bench) {
      var months = (pg.bench.months || []).map(function (mo) {
        return '<div style="flex:1;text-align:center;font-size:10.5px;font-weight:700;color:var(--color-neutral-700)">' + F.esc(mo) + '</div>';
      }).join('');
      var rows = (pg.bench.rows || []).map(function (rw) {
        var cells = (pg.bench.months || []).map(function () {
          return '<div style="flex:1;height:26px;margin:0 2px;border-radius:6px;border:1.5px solid color-mix(in srgb, var(--color-neutral-400) 60%, transparent)"></div>';
        }).join('');
        return '<div style="display:flex;align-items:center"><div style="width:178px;flex:none;font-size:12px;line-height:1.3;color:var(--color-neutral-800);padding-right:10px;box-sizing:border-box;text-wrap:pretty">' + F.esc(rw) + '</div>' + cells + '</div>';
      }).join('');
      bench =
        '<section style="display:flex;flex-direction:column;gap:6px">' +
          '<div class="kicker-sm" style="color:var(--color-neutral-700)">' + F.esc(pg.bench.label) + '</div>' +
          '<div style="display:flex;align-items:center"><div style="width:178px;flex:none"></div>' + months + '</div>' +
          rows +
        '</section>';
    }

    var pills = pg.prog
      ? '<div class="panel-warm" style="padding:12px 14px;border-radius:var(--radius-lg)"><div class="kicker-sm" style="color:var(--color-accent-2-800);margin-bottom:8px">' + F.esc(pg.prog.label) + '</div><div class="pill-row">' +
          pg.prog.pills.map(function (p) { return '<span class="pill" style="cursor:default">' + F.esc(p) + '</span>'; }).join('') +
        '</div></div>'
      : '';

    var notes = (pg.notes || []).map(function (n) { return '<li>' + F.esc(n) + '</li>'; }).join('');

    return (
      (paper ? '<section class="page">' : '<section class="stack">') +
        '<header style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px">' +
          '<div>' +
            '<div class="kicker" style="margin-bottom:9px">' + F.esc(pg.kicker) + '</div>' +
            '<h1 class="display" style="font-size:28px">' + F.esc(pg.title) + '</h1>' +
          '</div>' +
          '<div class="duration" style="height:34px;padding:0 20px;font-size:13.5px">' + F.esc(pg.duration) + '</div>' +
        '</header>' +
        (pg.intro ? '<p style="font-size:14.5px;line-height:1.5;color:var(--color-neutral-800);margin:0;text-wrap:pretty">' + F.esc(pg.intro) + '</p>' : '') +
        pills + blocks + record + bench +
        (notes ? '<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;font-size:14px;line-height:1.5;color:var(--color-neutral-800)">' + notes + '</ul>' : '') +
        (pg.footer ? '<div style="font-size:13px;color:var(--color-neutral-700);margin-top:auto">' + F.esc(pg.footer) + '</div>' : '') +
      '</section>'
    );
  }

  function render() {
    var paper = F.optionalPages.map(function (pg) { return pageHtml(pg, true); }).join('');
    var phone = F.optionalPages.map(function (pg) { return pageHtml(pg, false); }).join('<hr class="hr">');
    root.innerHTML =
      '<div class="viewbar no-print">' +
        '<a class="back" href="index.html">← Hub</a>' +
        '<span class="lab">View</span>' +
        '<button type="button" class="pill' + (view === 'paper' ? ' on' : '') + '" data-view="paper">Paper</button>' +
        '<button type="button" class="pill' + (view === 'phone' ? ' on' : '') + '" data-view="phone">Phone</button>' +
      '</div>' +
      '<div id="paper" class="paper' + (view === 'paper' ? '' : ' hidden') + '">' + paper + '</div>' +
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
