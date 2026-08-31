(function () {
  var F = window.FITNESS;
  var root = document.getElementById('app');
  var total = F.movementGroups.reduce(function (n, g) { return n + g.moves.length; }, 0);

  function moveHtml(mv) {
    var slug = mv.slug || F.slug(mv.name);
    var steps = (mv.steps || []).map(function (st) { return '<li>' + F.esc(st) + '</li>'; }).join('');
    var note = mv.note
      ? '<div class="callout note"><div class="lab">Note</div><p>' + F.esc(mv.note) + '</p></div>'
      : '';
    var read = mv.read
      ? '<div><a class="read-btn" href="' + F.esc(mv.read) + '" target="_blank" rel="noopener">Read<span>' + F.esc(mv.readSource || '') + '</span></a></div>'
      : '';
    return (
      '<article class="move" id="' + F.esc(slug) + '">' +
        '<h2>' + F.esc(mv.name) + '</h2>' +
        '<ol>' + steps + '</ol>' +
        '<div class="callout watch"><div class="lab">Watch for</div><p>' + F.esc(mv.watchFor) + '</p></div>' +
        note +
        read +
      '</article>'
    );
  }

  root.innerHTML =
    '<div class="wrap wrap-narrow">' +
      '<header>' +
        '<a class="back" href="index.html" style="display:inline-flex;margin-bottom:14px">← Hub</a>' +
        '<div class="kicker" style="margin-bottom:9px">Movement guide</div>' +
        '<h1 class="display display-lg" style="margin-bottom:10px">How to do it</h1>' +
        '<p class="lede">Cal\'s steps for the movements where form actually matters. Where a written walk-through exists and has been checked, there\'s a Read link.</p>' +
      '</header>' +
      '<div class="note" style="flex-direction:row;align-items:center;justify-content:space-between;gap:12px">' +
        '<div style="font-size:13.5px;line-height:1.45;color:var(--color-accent-2-900)">Every movement prescribed in any session. Nothing outstanding from Cal.</div>' +
        '<div style="flex:none;font-family:var(--font-heading);font-size:19px;color:var(--color-accent-2-800)">' + total + '</div>' +
      '</div>' +
      F.movementGroups.map(function (gp) {
        return (
          '<section class="stack">' +
            '<div class="kicker-sm" style="color:var(--color-neutral-700);padding-top:4px">' + F.esc(gp.label) + '</div>' +
            '<div class="moves-grid">' + gp.moves.map(moveHtml).join('') + '</div>' +
          '</section>'
        );
      }).join('') +
    '</div>';

  if (location.hash) {
    var el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView();
  }
})();
