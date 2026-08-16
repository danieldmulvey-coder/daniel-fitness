(function () {
  var F = window.FITNESS;
  var KEYS = F.KEYS;
  var root = document.getElementById('app');

  var state = {
    active: 'ua',
    data: {},
    ladderSession: 2,
    last: {},
    sound: true,
    timer: null
  };

  try {
    var h = (location.hash || '').replace('#', '');
    if (F.sessions.some(function (x) { return x.id === h; })) state.active = h;
    var raw = F.store.getRaw(KEYS.data);
    if (raw) state.data = JSON.parse(raw);
    var n = parseInt(F.store.getRaw(KEYS.ladder), 10);
    if (n >= 1) state.ladderSession = n;
    var lastRaw = F.store.getRaw(KEYS.last);
    if (lastRaw) state.last = JSON.parse(lastRaw);
    if (F.store.getRaw(KEYS.sound) === 'off') state.sound = false;
  } catch (e) {}

  function write(next) {
    state.data = next;
    F.store.set(KEYS.data, next);
  }

  function put(key, value) {
    var next = Object.assign({}, state.data);
    if (value === null || value === '' || value === false) delete next[key];
    else next[key] = value;
    write(next);
  }

  function get(key) { return state.data[key]; }

  function clearSession(id) {
    var next = {};
    Object.keys(state.data).forEach(function (k) {
      if (k.indexOf(id + '-') !== 0) next[k] = state.data[k];
    });
    write(next);
  }

  function snapshot(s, L) {
    var d = state.data;
    var last = Object.assign({}, state.last);
    s.exercises.forEach(function (ex, i) {
      var base = s.id + '-' + i;
      var count = ex.ladder ? 1 : ex.sets;
      var prefix = base + (ex.ladder ? '-done' : '-set');
      var done = 0;
      for (var n = 0; n < count; n++) if (d[prefix + n]) done++;
      if (!done) return;
      last[base] = {
        date: F.stamp(),
        load: d[base + '-other'] || d[base + '-load'] || (ex.ladder ? (ex.ladder === 'grip' ? L.grip : L.kb) : ''),
        done: done,
        count: count,
        peak: ex.ladder ? L.peak : 0
      };
    });
    state.last = last;
    F.store.set(KEYS.last, last);
  }

  function lastLine(base) {
    var r = state.last[base];
    if (!r) return '';
    var parts = [r.date];
    if (r.load) parts.push(r.load);
    parts.push(r.peak ? 'peak ' + r.peak + ', done' : r.done + ' of ' + r.count + ' sets');
    return parts.join(' · ');
  }

  function session() {
    return F.sessions.find(function (s) { return s.id === state.active; }) || F.sessions[0];
  }

  function setLadderSession(n, clearRungs) {
    var next = Math.max(1, n);
    state.ladderSession = next;
    try { localStorage.setItem(KEYS.ladder, String(next)); } catch (e) {}
    if (clearRungs) clearSession('mw');
  }

  function startRest(secs, label) {
    state.timer = { total: secs, left: secs, endsAt: Date.now() + secs * 1000, label: label, paused: false, done: false };
  }

  function pauseRest() {
    var t = state.timer;
    if (!t || t.done) return;
    if (t.paused) state.timer = Object.assign({}, t, { paused: false, endsAt: Date.now() + t.left * 1000 });
    else state.timer = Object.assign({}, t, { paused: true });
  }

  function tickRest() {
    var t = state.timer;
    if (!t || t.paused || t.done) return;
    var left = Math.max(0, Math.round((t.endsAt - Date.now()) / 1000));
    if (left === t.left) return;
    if (left === 0) {
      if (state.sound) F.chime();
      state.timer = Object.assign({}, t, { left: 0, done: true });
    } else {
      state.timer = Object.assign({}, t, { left: left });
    }
    paintTimer();
  }

  function clock(t) {
    if (t.done) return 'Go';
    return Math.floor(t.left / 60) + ':' + String(t.left % 60).padStart(2, '0');
  }

  function paintTimer() {
    var bar = document.getElementById('timer');
    var t = state.timer;
    if (!t) {
      if (bar) bar.remove();
      return;
    }
    var html =
      '<div class="timer" id="timer">' +
        '<div class="timer-inner">' +
          '<div class="timer-clock">' + clock(t) + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div class="timer-label">' + F.esc(t.done ? 'Rest over — ' + t.label.replace(/^Rest — /, '') : t.label) + '</div>' +
            '<div class="timer-track"><div class="timer-fill" style="width:' + (t.total ? Math.round((t.left / t.total) * 100) : 0) + '%"></div></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex:none">' +
            '<button type="button" class="timer-btn" data-act="timer-toggle">' + (t.done ? 'Restart' : (t.paused ? 'Resume' : 'Pause')) + '</button>' +
            '<button type="button" class="timer-btn solid" data-act="timer-dismiss">Done</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    if (bar) bar.outerHTML = html;
    else root.insertAdjacentHTML('beforeend', html);
  }

  function render() {
    var s = session();
    var L = F.ladderAt(state.ladderSession);
    var N = F.ladderAt(state.ladderSession + 1);
    var d = state.data;
    var esc = F.esc;

    var done = 0, total = 0;
    s.exercises.forEach(function (ex, i) {
      var count = ex.ladder ? 1 : ex.sets;
      var prefix = s.id + '-' + i + (ex.ladder ? '-done' : '-set');
      total += count;
      for (var n = 0; n < count; n++) if (d[prefix + n]) done++;
    });
    var pct = total ? Math.round((done / total) * 100) : 0;

    var tabs = F.sessions.map(function (x) {
      return '<button type="button" class="pill' + (x.id === state.active ? ' on' : '') + '" data-act="tab" data-id="' + esc(x.id) + '">' + esc(x.tab) + '</button>';
    }).join('');

    var simpleHtml = '';
    if (s.simple) {
      var doneKey = s.id + '-done';
      var isDone = !!get(doneKey);
      var rec = state.last[s.id + '-session'];
      var vKey = s.id + '-variant';
      var variant = get(vKey) || '';
      var progName = typeof s.simple.program === 'string' ? s.simple.program : (s.simple.program || {})[variant];
      var countKey = s.id + (variant ? '/' + variant : '') + '-count';
      var n = (state.last[countKey] || 0) + 1;
      var spec = progName ? F.opt[progName](n) : null;

      var variants = '';
      if (s.simple.variants.length) {
        variants =
          '<div class="stack-tight">' +
            '<div class="kicker-sm" style="color:var(--color-neutral-700)">Which one</div>' +
            '<div class="pill-row">' +
              s.simple.variants.map(function (label) {
                return '<button type="button" class="pill' + (get(vKey) === label ? ' on' : '') + '" data-act="variant" data-label="' + esc(label) + '">' + esc(label) + '</button>';
              }).join('') +
            '</div>' +
          '</div>';
      }

      var prog = spec
        ? '<div class="prog-line"><strong>' + esc(spec.line) + '</strong><span>' + esc(spec.sub) + '</span></div>'
        : '';

      var fields = '';
      if (spec && spec.fields.length) {
        fields =
          '<div class="stack" style="gap:11px">' +
            '<div class="kicker-sm" style="color:var(--color-neutral-700)">Record</div>' +
            spec.fields.map(function (f) {
              var fk = s.id + '-' + (variant ? variant.slice(7, 8) + '-' : '') + f.key;
              var inner = '';
              if (f.boxes) {
                inner = '<div class="pill-row" style="gap:9px">' +
                  Array.from({ length: f.boxes + (f.optional || 0) }, function (_, i) {
                    return '<button type="button" class="box' + (get(fk + '-' + i) ? ' on' : '') + (f.optional && i >= f.boxes ? ' optional' : '') + '" data-act="box" data-key="' + esc(fk + '-' + i) + '"></button>';
                  }).join('') +
                '</div>';
              }
              if (f.choices) {
                inner = '<div class="pill-row" style="gap:9px">' +
                  f.choices.map(function (c) {
                    return '<button type="button" class="pill' + (get(fk) === c ? ' on' : '') + '" data-act="choice" data-key="' + esc(fk) + '" data-val="' + esc(c) + '">' + esc(c) + '</button>';
                  }).join('') +
                '</div>';
              }
              if (f.text) {
                inner = '<input class="field-text" style="flex:1;min-width:200px" data-act="text" data-key="' + esc(fk) + '" placeholder="' + esc(f.text) + '" value="' + esc(get(fk) || '') + '">';
              }
              return '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><div style="font-size:13.5px;line-height:1.4;color:var(--color-neutral-800);width:208px;flex:none;text-wrap:pretty">' + esc(f.label) + '</div>' + inner + '</div>';
            }).join('') +
          '</div>';
      }

      var links = s.simple.links.map(function (lk) {
        return '<a class="form-link" href="' + esc(lk.href) + '">' + esc(lk.label) + '</a>';
      }).join('');

      simpleHtml =
        '<section class="panel">' +
          '<p class="lede" style="max-width:56ch">' + esc(s.simple.intro) + '</p>' +
          variants + prog + fields +
          '<div style="display:flex;flex-wrap:wrap;gap:14px">' + links + '</div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:14px;padding-top:4px;border-top:1.5px solid var(--color-neutral-300)">' +
            '<button type="button" class="mark' + (isDone ? ' on' : '') + '" data-act="simple-done">' + (isDone ? 'Done today' : 'Mark session done') + '</button>' +
            (rec ? '<div class="last-line">Last done ' + esc(rec.date) + (rec.load ? ' · ' + esc(rec.load) : '') + '</div>' : '') +
          '</div>' +
        '</section>';
    }

    var ladderHtml = '';
    if (s.id === 'mw') {
      ladderHtml =
        '<section class="panel panel-ladder">' +
          '<div style="display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:12px">' +
            '<div>' +
              '<div class="kicker-sm" style="color:var(--color-accent-700);margin-bottom:5px">Ladder · session ' + L.session + (L.cycle > 0 ? ' · cycle ' + (L.cycle + 1) + ', step ' + L.pos + ' of 16' : ' · step ' + L.pos + ' of 16') + '</div>' +
              '<div class="display" style="font-size:27px;line-height:1.05">Up to ' + L.peak + ', back down</div>' +
            '</div>' +
            '<div class="duration">' + L.total + ' reps · ' + esc(L.kb) + ' / ' + esc(L.grip) + '</div>' +
          '</div>' +
          '<div style="font-size:14px;line-height:1.5;color:var(--color-neutral-800);font-variant-numeric:tabular-nums">' + esc(L.rungs.join(' – ')) + '</div>' +
          '<div style="font-size:13px;line-height:1.45;color:var(--color-neutral-700);text-wrap:pretty">Gripper ladders during the kettlebell rests — one session, one tick. The count moves when you log a session, never when a day passes.</div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;padding-top:4px;border-top:1.5px solid var(--color-accent-300)">' +
            '<div style="font-size:13.5px;line-height:1.45;color:var(--color-neutral-800)">Next session: peak ' + N.peak + ', ' + N.total + ' reps' + (N.cycle > L.cycle ? ' — new cycle, ' + esc(N.kb) + ' kettlebell and ' + esc(N.grip) + ' gripper' : '') + '</div>' +
            '<button type="button" class="btn-primary" style="height:40px;padding:0 20px;font-size:13.5px" data-act="ladder-advance">Log session, step up</button>' +
            '<button type="button" class="btn-ghost" style="height:40px;padding:0 18px;font-size:13.5px" data-act="ladder-back">Step back</button>' +
          '</div>' +
        '</section>';
    }

    var exercises = s.exercises.map(function (ex, i) {
      var base = s.id + '-' + i;
      var href = F.formLinks[ex.name] ? 'movements.html#' + F.formLinks[ex.name] : '';
      var metrics = ex.ladder
        ? 'Peak ' + L.peak + ' · ' + L.total + ' swings · ' + L.kb + ' · gripper ' + L.grip + ' each hand'
        : ex.metrics;
      var loads = (ex.loads || []).map(function (label) {
        return '<button type="button" class="pill' + (get(base + '-load') === label ? ' on' : '') + '" data-act="load" data-base="' + esc(base) + '" data-label="' + esc(label) + '">' + esc(label) + '</button>';
      }).join('');
      var sets = '';
      if (!ex.ladder) {
        sets = '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><div class="kicker-sm" style="color:var(--color-neutral-700)">Sets</div>' +
          Array.from({ length: ex.sets }, function (_, n) {
            return '<button type="button" class="set-btn' + (get(base + '-set' + n) ? ' on' : '') + '" data-act="set" data-base="' + esc(base) + '" data-n="' + n + '" data-name="' + esc(ex.name) + '" data-sets="' + ex.sets + '" data-rest="' + F.restSecs(ex) + '">' + (n + 1) + '</button>';
          }).join('') + '</div>';
      }
      var doneBtn = ex.ladder
        ? '<button type="button" class="mark mark-lg' + (get(base + '-done0') ? ' on' : '') + '" data-act="ladder-done" data-base="' + esc(base) + '">' + (get(base + '-done0') ? 'Session done' : 'Mark the session done') + '</button>'
        : '';
      var last = lastLine(base);
      return (
        '<section class="panel panel-ex">' +
          '<div class="ex-head">' +
            '<div style="display:flex;align-items:baseline;gap:10px">' +
              '<div class="ex-code">' + esc(ex.code) + '</div>' +
              '<div>' +
                '<div class="ex-name">' + esc(ex.name) + '</div>' +
                '<div style="display:flex;align-items:baseline;flex-wrap:wrap;gap:10px;margin-top:2px">' +
                  '<div class="ex-metrics">' + esc(metrics) + '</div>' +
                  (href ? '<a class="form-link" href="' + esc(href) + '" target="_blank" rel="noopener">How to do it ↗</a>' : '') +
                '</div>' +
              '</div>' +
            '</div>' +
            (ex.superset ? '<div class="superset">' + esc(ex.superset) + '</div>' : '') +
          '</div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px">' +
            loads +
            '<input class="other-text" data-act="other" data-base="' + esc(base) + '" placeholder="Other" value="' + esc(get(base + '-other') || '') + '">' +
          '</div>' +
          sets + doneBtn +
          '<input class="note-text" data-act="note" data-base="' + esc(base) + '" placeholder="Notes — different weights per set, how it felt" value="' + esc(get(base + '-note') || '') + '">' +
          (last ? '<div class="last-line"><span style="font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Last time</span> ' + esc(last) + '</div>' : '') +
          '<div class="ex-form">' + esc(ex.form) + '</div>' +
        '</section>'
      );
    }).join('');

    var finKey = s.id + '-finisher';
    var finDone = !!get(finKey);
    var finHtml = s.finText
      ? '<section class="panel-warm" style="flex-direction:row;align-items:center;justify-content:space-between;display:flex;gap:14px;padding:14px 18px;border-radius:var(--radius-lg)">' +
          '<div><div class="kicker-sm" style="color:var(--color-accent-2-800);margin-bottom:5px">' + esc(s.finLabel) + '</div>' +
          '<div style="font-size:14.5px;line-height:1.45;color:var(--color-neutral-800)">' + esc(s.finText) + '</div></div>' +
          '<button type="button" class="mark" style="flex:none;height:44px;padding:0 18px;font-size:14px" data-act="fin">' + (finDone ? 'Done' : 'Mark done') + '</button>' +
        '</section>'
      : '';

    var warmHtml = s.warmText
      ? '<section class="panel panel-warm"><div class="kicker-sm" style="color:var(--color-accent-2-800)">' + esc(s.warmLabel) + '</div><div style="font-size:14px;line-height:1.5;color:var(--color-neutral-800)">' + esc(s.warmText) + '</div></section>'
      : '';

    root.innerHTML =
      '<div class="wrap wrap-tracker">' +
        '<header style="display:flex;flex-direction:column;gap:12px">' +
          '<a class="back" href="index.html">← All documents</a>' +
          '<h1 class="display display-lg">Workout Tracker</h1>' +
          '<p class="lede">Everything you tick or type saves on this device as you go. It stays until you reset the session.</p>' +
        '</header>' +
        '<nav class="pill-row">' + tabs + '</nav>' +
        '<section class="session-head">' +
          '<div>' +
            '<div class="kicker" style="font-size:11.5px;letter-spacing:0.16em;margin-bottom:6px">' + esc(s.kicker) + '</div>' +
            '<div class="display display-md">' + esc(s.title) + '</div>' +
          '</div>' +
          '<div class="duration">' + esc(s.duration) + '</div>' +
        '</section>' +
        (total > 0
          ? '<div class="progress"><div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div><div class="progress-label">' + (s.id === 'mw' ? (done ? 'Session done' : 'Not yet done') : done + ' / ' + total + ' sets') + '</div></div>'
          : '') +
        simpleHtml + warmHtml + ladderHtml + exercises + finHtml +
        '<footer style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;border-top:2px solid color-mix(in srgb, var(--color-accent-2-600) 40%, transparent);padding-top:18px">' +
          '<div style="font-size:13px;line-height:1.5;color:var(--color-neutral-700);max-width:40ch">' +
            (s.simple
              ? 'Saved on this device. Marking it done keeps the date as “last done” and advances the session count.'
              : 'Saved on this device as you go. Finishing stores this session as “last time” and clears ' + esc(s.tab) + '. Reset clears without saving.') +
          '</div>' +
          (s.simple ? '' :
            '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px">' +
              '<button type="button" class="btn-primary" data-act="finish">Finish &amp; save as last time</button>' +
              '<button type="button" class="btn-ghost" data-act="reset">Reset</button>' +
            '</div>') +
        '</footer>' +
        '<div style="display:flex;align-items:center;gap:12px;font-size:13px;color:var(--color-neutral-700)">' +
          '<button type="button" class="pill' + (state.sound ? ' on' : '') + '" style="height:34px;padding:0 15px;font-size:12.5px" data-act="sound">' + (state.sound ? 'Sound on' : 'Sound off') + '</button>' +
          '<span>' + (s.simple ? 'The chime is used by the rest timer on the strength sessions.' : 'Ticking a set starts that exercise’s rest timer.') + '</span>' +
        '</div>' +
      '</div>';

    paintTimer();
  }

  root.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-act]');
    if (!btn) return;
    var act = btn.getAttribute('data-act');
    var s = session();
    var L = F.ladderAt(state.ladderSession);

    if (act === 'tab') {
      state.active = btn.getAttribute('data-id');
      history.replaceState(null, '', '#' + state.active);
      render();
      return;
    }
    if (act === 'load') {
      var base = btn.getAttribute('data-base');
      var label = btn.getAttribute('data-label');
      put(base + '-load', get(base + '-load') === label ? null : label);
      render();
      return;
    }
    if (act === 'set') {
      var base = btn.getAttribute('data-base');
      var n = btn.getAttribute('data-n');
      var on = !get(base + '-set' + n);
      put(base + '-set' + n, on);
      if (on) startRest(parseInt(btn.getAttribute('data-rest'), 10), 'Rest — ' + btn.getAttribute('data-name') + ', set ' + (parseInt(n, 10) + 1) + ' of ' + btn.getAttribute('data-sets'));
      render();
      return;
    }
    if (act === 'ladder-done') {
      var base = btn.getAttribute('data-base');
      put(base + '-done0', !get(base + '-done0'));
      render();
      return;
    }
    if (act === 'fin') {
      put(s.id + '-finisher', !get(s.id + '-finisher'));
      render();
      return;
    }
    if (act === 'finish') { snapshot(s, L); clearSession(s.id); render(); return; }
    if (act === 'reset') { clearSession(s.id); render(); return; }
    if (act === 'sound') {
      state.sound = !state.sound;
      try { localStorage.setItem(KEYS.sound, state.sound ? 'on' : 'off'); } catch (e2) {}
      if (state.sound) F.chime();
      render();
      return;
    }
    if (act === 'ladder-advance') { snapshot(s, L); setLadderSession(state.ladderSession + 1, true); render(); return; }
    if (act === 'ladder-back') { setLadderSession(state.ladderSession - 1, true); render(); return; }
    if (act === 'variant') {
      var label = btn.getAttribute('data-label');
      var vKey = s.id + '-variant';
      put(vKey, get(vKey) === label ? null : label);
      render();
      return;
    }
    if (act === 'simple-done') {
      var doneKey = s.id + '-done';
      var isDone = !!get(doneKey);
      var vKey = s.id + '-variant';
      var variant = get(vKey) || '';
      var progName = typeof s.simple.program === 'string' ? s.simple.program : (s.simple.program || {})[variant];
      var countKey = s.id + (variant ? '/' + variant : '') + '-count';
      var n = (state.last[countKey] || 0) + 1;
      put(doneKey, !isDone);
      var last = Object.assign({}, state.last);
      if (!isDone) {
        last[s.id + '-session'] = { date: F.stamp(), load: variant };
        if (progName) last[countKey] = n;
      } else {
        delete last[s.id + '-session'];
        if (progName && last[countKey]) last[countKey] = last[countKey] - 1;
      }
      state.last = last;
      F.store.set(KEYS.last, last);
      render();
      return;
    }
    if (act === 'box') {
      var key = btn.getAttribute('data-key');
      put(key, !get(key));
      render();
      return;
    }
    if (act === 'choice') {
      var key = btn.getAttribute('data-key');
      var val = btn.getAttribute('data-val');
      put(key, get(key) === val ? null : val);
      render();
      return;
    }
    if (act === 'timer-toggle') {
      var t = state.timer;
      if (!t) return;
      if (t.done) startRest(t.total, t.label);
      else pauseRest();
      paintTimer();
      return;
    }
    if (act === 'timer-dismiss') {
      state.timer = null;
      paintTimer();
    }
  });

  root.addEventListener('change', function (e) {
    var el = e.target;
    var act = el.getAttribute('data-act');
    if (act === 'other') put(el.getAttribute('data-base') + '-other', el.value);
    if (act === 'note') put(el.getAttribute('data-base') + '-note', el.value);
    if (act === 'text') put(el.getAttribute('data-key'), el.value);
  });

  window.addEventListener('hashchange', function () {
    var h = (location.hash || '').replace('#', '');
    if (F.sessions.some(function (x) { return x.id === h; })) {
      state.active = h;
      render();
    }
  });

  setInterval(tickRest, 250);
  render();
})();
