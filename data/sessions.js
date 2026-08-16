window.FITNESS = window.FITNESS || {};
(function (F) {

const SESSIONS = [
  {
    id: 'ua', tab: 'Upper 1', kicker: 'Upper 1 · mandatory', title: 'Chest, Back, Shoulders', duration: '30 min',
    warmLabel: 'Warm-up · 3 min', warmText: 'Band pull-aparts x 15 (light band) · Arm circles x 10 each direction · Light DB rows x 10',
    finLabel: 'Finisher · 2 min', finText: 'Band lateral raises x 15–20 — standing',
    exercises: [
      { code: 'A1', name: 'Dumbbell Floor Press', metrics: '3 sets · 10–12 · 45 sec', loads: ['30 lb', '35 lb'], sets: 3, superset: 'Superset A1 + A2', form: 'On your back, knees bent, elbows touch down as the bottom of the rep. Press until the dumbbells meet over the chest.' },
      { code: 'A2', name: 'Dumbbell Floor Chest Fly', metrics: '3 sets · 12–15 · 45 sec', loads: ['12.5 lb', '15 lb'], sets: 3, superset: 'Superset A1 + A2', form: 'On your back, knees bent, one dumbbell per hand. Wide arc out to the sides with a slight elbow bend held throughout, then back together over the chest.' },
      { code: 'B1', name: 'Dumbbell Rows', metrics: '3 sets · 10–12 each side · 45 sec', loads: ['30 lb', '35 lb'], sets: 3, superset: 'Superset B1 + B2', form: 'Hinge to 45°, back flat, one hand braced. Pull to the hip, elbow close to the ribs.' },
      { code: 'B2', name: 'Band Face Pulls', metrics: '3 sets · 15–20 · 45 sec', loads: ['Yellow 10', 'Blue 20', 'Green 30'], sets: 3, superset: 'Superset B1 + B2', form: 'Pull toward the forehead, splitting the handles apart, thumbs ending behind the ears. Elbows stay high.' },
      { code: 'C', name: 'Dumbbell Shoulder Press', metrics: '2 sets · 10–12 · 60 sec', loads: ['25 lb', '30 lb'], sets: 2, superset: '', form: 'Standing, glutes and abs tight so the press does not become a back arch. Finish over the ears, not in front of the face.' }
    ]
  },
  {
    id: 'ub', tab: 'Upper 2', kicker: 'Upper 2 · optional', title: 'Arms, Bands, Accessories', duration: '30 min',
    warmLabel: 'Warm-up · 2 min', warmText: 'Band pull-aparts x 15 · Wrist circles, arm swings',
    finLabel: 'Finisher · 2 min', finText: 'Plank hold x 45–60 sec',
    exercises: [
      { code: 'A', name: 'Dumbbell Bicep Curls', metrics: '3 sets · 12–15 · 45 sec', loads: ['20 lb', '25 lb'], sets: 3, superset: 'Superset A + B', form: 'Elbows pinned to the sides. Pause at the top, lower for three counts.' },
      { code: 'B', name: 'Band Bicep Curls', metrics: '3 sets · 15–20 · 45 sec', loads: ['Green 30', 'Black 40'], sets: 3, superset: 'Superset A + B', form: 'Stand on the middle of the band, elbows fixed, resist on the way down.' },
      { code: 'C', name: 'Dumbbell Tricep Overhead Extension', metrics: '3 sets · 12–15 · 45 sec', loads: ['20 lb', '25 lb'], sets: 3, superset: 'Superset C + D', form: 'Both hands on one dumbbell, ribs down, elbows forward and close together.' },
      { code: 'D', name: 'Band Tricep Pushdown', metrics: '3 sets · 15–20 · 45 sec', loads: ['Green 30', 'Black 40'], sets: 3, superset: 'Superset C + D', form: 'Anchor high. Elbows tight to the sides and still — only the forearms move.' },
      { code: 'E', name: 'Band Pallof Press', metrics: '3 sets · 12 each side · 60 sec', loads: ['Blue 20', 'Green 30'], sets: 3, superset: '', form: 'Side-on to the anchor, press straight out from the sternum. Nothing rotates. Hold two seconds.' }
    ]
  },
  {
    id: 'la', tab: 'Lower 1', kicker: 'Lower 1 · mandatory', title: 'Quads, Glutes, Posterior Chain', duration: '30 min',
    warmLabel: 'Warm-up · 3 min', warmText: 'Bodyweight squats x 10 · Band pull-aparts x 15 · Leg swings x 10 each leg',
    finLabel: 'Finisher · 2 min', finText: 'Glute bridge hold x 45 sec',
    exercises: [
      { code: 'A', name: 'Dumbbell Goblet Squats', metrics: '3 sets · 15–20 · 60 sec', loads: ['35 lb', '40 lb'], sets: 3, superset: 'Superset A + B', form: 'Dumbbell at chest height, elbows tucked. Sit between the heels, knees over the toes, drive through the whole foot.' },
      { code: 'B', name: 'Split Squats', metrics: '3 sets · 10–12 each leg · 60 sec', loads: ['20 lb', '30 lb'], sets: 3, superset: 'Superset A + B', form: 'Dumbbells at the sides, long stride back on the ball of the foot. Drop straight down until the back knee nearly touches, torso upright.' },
      { code: 'C', name: 'Dumbbell Romanian Deadlift', metrics: '3 sets · 12–15 · 60 sec', loads: ['35 lb', '40 lb'], sets: 3, superset: 'Superset C + D', form: 'Knees softly bent and staying that way. Hips back, dumbbells sliding down the thighs to mid-shin.' },
      { code: 'D', name: 'Kettlebell Swings', metrics: '3 sets · 15–20 · 60 sec', loads: ['5 lb', '7.5 lb'], sets: 3, superset: 'Superset C + D', form: 'Hip drive, not a squat. Heavier bell for hamstring emphasis, and pause a beat at the bottom of the backswing.' },
      { code: 'E', name: 'Dumbbell Lateral Lunges', metrics: '2 sets · 10–12 each side · 45 sec', loads: ['25 lb', '35 lb'], sets: 2, superset: '', form: 'Large step directly to the side, torso upright, trailing leg straight. Push off the bent leg to return.' }
    ]
  },
  {
    id: 'lb', tab: 'Lower 2', kicker: 'Lower 2 · optional', title: 'Hip Drive, Core, Leg Finisher', duration: '30 min',
    warmLabel: 'Warm-up · 2 min', warmText: 'Bodyweight lunges x 10 each leg · Band pull-aparts x 15 · Cat-cow stretches x 5',
    finLabel: 'Finisher · 2 min', finText: 'Side plank holds x 30 sec each side',
    exercises: [
      { code: 'A', name: 'Dumbbell Lateral Lunges', metrics: '3 sets · 12 each side · 60 sec', loads: ['25 lb', '35 lb'], sets: 3, superset: 'Superset A + B', form: 'Step wide, sit that hip back, trailing leg straight, both feet flat and forward. Push off the bent leg.' },
      { code: 'B', name: 'Band Lateral Walk', metrics: '3 sets · 20 steps each way · 60 sec', loads: ['Yellow 10', 'Blue 20'], sets: 3, superset: 'Superset A + B', form: 'Band above the knees, quarter-squat held all set. Small even steps, knees never caving.' },
      { code: 'C', name: 'Dumbbell Single-Leg Deadlift', metrics: '3 sets · 10–12 each leg · 60 sec', loads: ['20 lb', '30 lb'], sets: 3, superset: 'Superset C + D', form: 'Dumbbell in the hand opposite the standing leg. Back leg rises in line with the spine, hips level.' },
      { code: 'D', name: 'Dumbbell Romanian Deadlift', metrics: '3 sets · 12–15 · 60 sec', loads: ['35 lb', '40 lb'], sets: 3, superset: 'Superset C + D', form: 'Soft knees held throughout, hips back, dumbbells travelling down the legs to mid-shin.' },
      { code: 'E', name: 'Band Pallof Press', metrics: '2 sets · 15 each side · 45 sec', loads: ['Yellow 10', 'Blue 20', 'Green 30'], sets: 2, superset: '', form: 'Band at chest height on the door frame, stand side-on, press out and resist the twist. Nothing rotates.' }
    ]
  },
  {
    id: 'mw', tab: 'Ladders', kicker: 'Ladders', title: 'Kettlebell + Grip Ladders', duration: '15–20 min',
    warmLabel: 'Warm-up · 2 min', warmText: 'Arm circles and wrist mobility · Shoulder rotations x 10',
    finLabel: 'Finisher · 1 min', finText: 'Wrist and forearm stretch',
    exercises: [
      { code: 'A', name: 'Ladders', ladder: 'both', metrics: 'Pyramid up and down — this week’s rep count', loads: ['5 lb', '7.5 lb'], sets: 1, superset: '', form: 'Hinge, do not squat. Snap the hips, arms stay loose ropes, glutes and abs tight at the top.' },
      { code: 'B', name: 'Hand Gripper Ladder', ladder: 'grip', metrics: 'Same pyramid, each hand', loads: ['5 kg', '7.5 kg', '10 kg', '15 kg'], sets: 1, superset: '', form: 'Handle across the palm and finger pads, not the joints. Close fully, hold a beat, open all the way.' }
    ]
  }
];

// Optional sessions. Brad programmed all four on 2026-08-12: Cardio A on the clock,
// Yoga on hold time, Cardio B and Daily Stretch deliberately fixed. Counted by
// session, never by date. The running orders stay in Optional Sessions and the guides.
SESSIONS.push(
  {
    id: 'yoga', tab: 'Yoga', kicker: 'Any day · optional', title: 'Daily Morning Yoga Flow', duration: '10 min',
    warmText: '', finText: '', exercises: [],
    simple: {
      intro: 'Ease into the day. Focus on breath, mobility, and recovery between strength days.',
      variants: [],
      program: 'yoga',
      links: [{ label: 'Running order ↗', href: 'sheets-optional.html' }, { label: 'Form guide ↗', href: 'guide-yoga.html' }]
    }
  },
  {
    id: 'cardio', tab: 'Cardio', kicker: 'Optional', title: 'Cardio Session', duration: '20–25 min',
    warmText: '', finText: '', exercises: [],
    simple: {
      intro: 'Two to choose from: A is high-intensity intervals at 20 minutes, B is steady cardio with flow at 25 minutes.',
      variants: ['Cardio A · intervals', 'Cardio B · steady + flow'],
      program: { 'Cardio A · intervals': 'cardioA', 'Cardio B · steady + flow': 'cardioB' },
      links: [{ label: 'Running order ↗', href: 'sheets-optional.html' }, { label: 'Form guide ↗', href: 'guide-cardio.html' }]
    }
  },
  {
    id: 'stretch', tab: 'Stretch', kicker: 'Any day · optional', title: 'Daily Stretch', duration: '10 min',
    warmText: '', finText: '', exercises: [],
    simple: {
      intro: 'Consistent gentle stretching builds long-term mobility and flexibility. Hold each stretch 30–45 sec, never bounce, breathe deeply.',
      variants: [],
      program: 'stretch',
      links: [{ label: 'Running order ↗', href: 'sheets-optional.html' }, { label: 'Form guide ↗', href: 'guide-yoga.html' }]
    }
  }
);

// Brad's programming for the optional four. n is the session about to be done,
// counted by session and never by date.
const OPT = {
  cardioA: n => {
    const step = (n - 1) % 16, cycle = Math.floor((n - 1) / 16);
    const ratio = step < 4 ? '30 sec work / 30 sec rest' : step < 8 ? '35 / 25' : step < 12 ? '40 / 20' : '45 / 15';
    const rounds = 4 + cycle;
    return {
      line: ratio + ' · ' + rounds + ' rounds',
      sub: 'Session ' + n + (cycle > 0 ? ' · cycle ' + (cycle + 1) : '') + ' · the circuit never changes, the clock does',
      fields: [
        { key: 'rounds', label: 'Rounds at the prescribed ratio', boxes: rounds },
        { key: 'burpees', label: 'Burpees in round 1', text: 'One number, first round, while fresh' }
      ]
    };
  },
  cardioB: n => ({
    line: '3 rounds · 25 min',
    sub: 'Session ' + n + ' · deliberately not progressed. This is active recovery.',
    fields: [
      { key: 'rounds', label: 'Rounds done', boxes: 3, optional: 1 },
      { key: 'talk', label: 'Could you have held a conversation at the end of round 2?', choices: ['Yes', 'No'] }
    ]
  }),
  yoga: n => ({
    line: 'Hold ' + (n <= 6 ? '30' : n <= 12 ? '40' : '45') + ' sec',
    sub: 'Session ' + n + ' · the sequence never changes, only the clock',
    fields: [
      { key: 'poses', label: 'Flow positions completed', boxes: 7 },
      { key: 'trouble', label: 'A pose that would not hold today', text: 'A tight hip, not a discipline failure' }
    ]
  }),
  stretch: n => ({
    line: '10 min · unchanged',
    sub: 'Session ' + n + ' · fixed forever. Consistency is the only metric.',
    fields: []
  })
};

const KEY = 'brad-tracker-v1';
const LADDER_KEY = 'brad-ladder-session';
const LAST_KEY = 'brad-tracker-last';

const SOUND_KEY = 'brad-tracker-sound';

// Two short tones at the end of rest — WebAudio, so there is no file to load.
function chime() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [[880, 0], [1174, 0.16]].forEach(([hz, at]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = hz;
      g.gain.setValueAtTime(0.0001, ctx.currentTime + at);
      g.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + at + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + at + 0.3);
      o.connect(g); g.connect(ctx.destination);
      o.start(ctx.currentTime + at); o.stop(ctx.currentTime + at + 0.32);
    });
    setTimeout(() => { try { ctx.close(); } catch (e) {} }, 1200);
  } catch (e) {}
}

function restSecs(ex) {
  const m = /(\d+)\s*sec/.exec(ex.metrics || '');
  return m ? parseInt(m[1], 10) : (ex.ladder ? 30 : 45);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function stamp() { const d = new Date(); return MONTHS[d.getMonth()] + ' ' + d.getDate(); }

// Session-counted, not date-counted. Session 1 peaked at 5 reps; +1 rep per session
// through session 16 (peak 20), then the next cycle restarts at 5 with the heavier load.
const KB_LOADS = ['5 lb', '7.5 lb'];
const GRIP_LOADS = ['5 kg', '7.5 kg', '10 kg', '15 kg'];

function ladderAt(n) {
  const cycle = Math.floor((n - 1) / 16);
  const pos = ((n - 1) % 16) + 1;
  const peak = 4 + pos;
  const rungs = [];
  for (let i = 1; i <= peak; i++) rungs.push(i);
  for (let i = peak - 1; i >= 1; i--) rungs.push(i);
  return {
    session: n, cycle: cycle, pos: pos, peak: peak, rungs: rungs, total: peak * peak,
    kb: KB_LOADS[Math.min(cycle, KB_LOADS.length - 1)],
    grip: GRIP_LOADS[Math.min(cycle, GRIP_LOADS.length - 1)]
  };
}

const FORM_LINKS = {
  'Dumbbell Floor Press': 'dumbbell-floor-press',
  'Dumbbell Floor Chest Fly': 'dumbbell-floor-chest-fly',
  'Dumbbell Rows': 'dumbbell-rows',
  'Band Face Pulls': 'band-face-pulls',
  'Dumbbell Shoulder Press': 'dumbbell-shoulder-press',
  'Dumbbell Bicep Curls': 'dumbbell-bicep-curls',
  'Band Bicep Curls': 'band-bicep-curls',
  'Dumbbell Tricep Overhead Extension': 'dumbbell-tricep-overhead-extension',
  'Band Tricep Pushdown': 'band-tricep-pushdown',
  'Band Pallof Press': 'band-pallof-press',
  'Dumbbell Goblet Squats': 'dumbbell-goblet-squat',
  'Split Squats': 'split-squats',
  'Dumbbell Romanian Deadlift': 'dumbbell-romanian-deadlift',
  'Kettlebell Swings': 'kettlebell-swing',
  'Dumbbell Lateral Lunges': 'dumbbell-lateral-lunges',
  'Band Lateral Walk': 'band-lateral-walk',
  'Dumbbell Single-Leg Deadlift': 'dumbbell-single-leg-deadlift',
  'Ladders': 'kettlebell-swing'
};

  F.sessions = SESSIONS;
  F.opt = OPT;
  F.formLinks = FORM_LINKS;
  F.kbLoads = KB_LOADS;
  F.gripLoads = GRIP_LOADS;
  F.ladderAt = ladderAt;
  F.chime = chime;
  F.restSecs = restSecs;
  F.stamp = stamp;
  F.KEYS = { data: KEY, ladder: LADDER_KEY, last: LAST_KEY, sound: SOUND_KEY };
})(window.FITNESS);
