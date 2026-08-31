(function () {
  var F = window.FITNESS;
  var root = document.getElementById('app');
  var kicker = document.body.getAttribute('data-kicker') || 'Form guide';
  var moves = F.guideMoves || [];
  var pages = [];
  for (var i = 0; i < moves.length; i += 2) {
    pages.push({ moves: moves.slice(i, i + 2), label: 'Page ' + (pages.length + 1), last: false });
  }
  pages.push({ moves: [], label: 'Standing notes', last: true });

  function moveHtml(mv) {
    var phases = (mv.phases || []).map(function (ph) {
      return (
        '<div>' +
          '<h3>' + F.esc(ph.title) + '</h3>' +
          '<ul>' + (ph.lines || []).map(function (ln) { return '<li>' + F.esc(ln) + '</li>'; }).join('') + '</ul>' +
        '</div>'
      );
    }).join('');
    var cues = (mv.cues || []).map(function (cu) { return '<div>' + F.esc(cu) + '</div>'; }).join('');
    var why = mv.why
      ? '<div class="meta-row"><div class="lab" style="color:var(--color-accent-2-800)">Why this</div><div style="font-size:12.5px;line-height:1.5;text-wrap:pretty">' + F.esc(mv.why) + '</div></div>'
      : '';
    return (
      '<section class="guide-move">' +
        '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:18px">' +
          '<div>' +
            '<div class="kicker-sm" style="color:var(--color-accent-2-800);margin-bottom:5px">' + F.esc(mv.day) + '</div>' +
            '<h2 class="display" style="font-size:24px;line-height:1.05">' + F.esc(mv.name) + '</h2>' +
          '</div>' +
          '<div class="duration" style="height:27px;padding:0 15px;background:var(--color-neutral-200);color:var(--color-neutral-800);font-size:11.5px">' + F.esc(mv.equipment) + '</div>' +
        '</div>' +
        '<div class="phases">' + phases + '</div>' +
        '<div class="cues"><div class="kicker-sm" style="color:var(--color-accent-2-800);padding-top:2px">Key cues</div><div style="display:flex;flex-direction:column;gap:3px;font-size:13px;line-height:1.45;color:var(--color-neutral-800)">' + cues + '</div></div>' +
        '<div class="meta-row"><div class="lab" style="color:var(--color-accent-700)">Watch for</div><div>' + F.esc(mv.mistake) + '</div></div>' +
        '<div class="meta-row"><div class="lab" style="color:var(--color-neutral-700)">Dose</div><div>' + F.esc(mv.dose) + '</div></div>' +
        why +
      '</section>'
    );
  }

  var notes =
    '<section class="standing">' +
      '<div class="kicker-sm" style="color:var(--color-neutral-700)">Standing notes</div>' +
      '<p><strong>No photographs.</strong> Every photo frame was removed on Daniel\'s instruction. The written steps carry the movement on their own; if a section here cannot be followed without a picture, that is a defect in Cal\'s writing and he wants it sent back, not illustrated.</p>' +
      '<p><strong>Equipment, standing:</strong> dumbbells, resistance bands with a door-height anchor, the plate-loaded kettlebell handle, the adjustable hand gripper, and the floor, wall and door frame. No bench, no box, no step, no pull-up bar. A section needing anything else is an error — send it back rather than substituting.</p>' +
      '<p><strong>Sources behind these cues:</strong> StrengthLog, BarBend, Gravitus; r/fitness and r/bodyweightfitness; ACE Fitness, PureGym, Muscle &amp; Strength.</p>' +
    '</section>';

  root.innerHTML =
    '<div class="paper">' +
      pages.map(function (pg) {
        return (
          '<section class="page">' +
            '<header class="page-head">' +
              '<div class="kicker" style="font-size:11.5px;white-space:nowrap">' + F.esc(kicker) + '</div>' +
              '<div style="font-size:11.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-neutral-700);white-space:nowrap">' + F.esc(pg.label) + '</div>' +
              '<a class="back no-print" href="index.html" style="font-size:11.5px;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap">← All documents</a>' +
            '</header>' +
            pg.moves.map(moveHtml).join('') +
            (pg.last ? notes : '') +
          '</section>'
        );
      }).join('') +
    '</div>';
})();
