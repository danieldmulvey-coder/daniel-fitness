window.FITNESS = window.FITNESS || {};
(function (F) {

const S = n => Array.from({ length: n }, (_, i) => i + 1);

const WORKOUTS = [
  {
    kicker: 'Upper 1 · mandatory',
    title: 'Chest, Back, Shoulders',
    duration: '30 min',
    subtitle: '',
    warmLabel: 'Warm-up · 3 min',
    warmText: 'Band pull-aparts x 15 (light band) · Arm circles x 10 each direction · Light DB rows x 10',
    mainLabel: 'Main work · 25 min',
    groups: [
      {
        label: 'Superset A1 + A2',
        items: [
          { code: 'A1', name: 'Dumbbell Floor Press', note: 'On the back, knees bent — no bench', form: 'Lie on your back, knees bent, feet flat. Upper arms rest at about 45° from your ribs; elbows touch down each rep and that is the bottom. Press until the DBs meet over your chest, wrists stacked over elbows.', choices: ['30 lb', '35 lb'], freeWeight: true, metrics: '3 sets · 10–12 · 45 sec', sets: S(3) },
          { code: 'A2', name: 'Dumbbell Floor Chest Fly (during rest)', form: 'On your back, knees bent, feet flat. One dumbbell per hand above your chest with a slight elbow bend held throughout. Lower out to the sides in a wide arc until the upper arms reach the floor, then drive back together and squeeze.', note: 'On the back, one dumbbell per hand, wide arc, slight elbow bend held throughout', choices: ['12.5 lb', '15 lb'], freeWeight: true, metrics: '3 sets · 12–15 · 45 sec', sets: S(3) }
        ]
      },
      {
        label: 'Superset B1 + B2',
        items: [
          { code: 'B1', name: 'Dumbbell Rows', form: 'Hinge to about 45°, back flat, one hand braced on a wall or your thigh. Pull the DB to your hip, not your shoulder, elbow close to your ribs. Lower all the way and let the shoulder blade travel.', note: 'Alternating or both hands', choices: ['30 lb', '35 lb'], freeWeight: true, metrics: '3 sets · 10–12 each side · 45 sec', sets: S(3) },
          { code: 'B2', name: 'Band Face Pulls (during rest)', form: 'Pull the handles toward your forehead, splitting them apart as they arrive, thumbs ending behind your ears. Elbows stay high and level with your shoulders. Chin tucked, ribs down.', note: 'Anchor at upper door frame with everstretch, pull toward face', choices: ['Yellow 10 lb', 'Blue 20 lb', 'Green 30 lb'], freeWeight: true, metrics: '3 sets · 15–20 · 45 sec', sets: S(3) }
        ]
      },
      {
        label: '',
        items: [
          { code: 'C', name: 'Dumbbell Shoulder Press', note: 'Standing — no bench needed', form: 'Stand feet hip-width, squeeze your glutes and brace your abs so the press does not become a back arch. Start at chin height, press slightly back so the DBs finish over your ears, not in front of your face.', choices: ['25 lb', '30 lb'], freeWeight: true, metrics: '2 sets · 10–12 · 60 sec', sets: S(2) }
        ]
      }
    ],
    finLabel: 'Finisher · 2 min',
    finText: 'Band lateral raises x 15–20 — standing',
    finChoices: ['Yellow 10 lb', 'Blue 20 lb'],
    footer: 'Total work time: ~30 minutes.',
    footer2: ''
  },
  {
    kicker: 'Upper 2 · optional',
    title: 'Arms, Bands, Accessories',
    duration: '30 min',
    subtitle: 'Optional second session, or standalone complete workout.',
    warmLabel: 'Warm-up · 2 min',
    warmText: 'Band pull-aparts x 15 · Wrist circles, arm swings',
    mainLabel: 'Main work · 26 min',
    groups: [
      {
        label: 'Superset A + B',
        items: [
          { code: 'A', name: 'Dumbbell Bicep Curls', form: 'Elbows pinned to your sides for the whole set. Curl without swinging the torso, pause at the top, and lower for three counts — the lowering is the work.', note: '', choices: ['20 lb', '25 lb'], freeWeight: true, metrics: '3 sets · 12–15 · 45 sec', sets: S(3) },
          { code: 'B', name: 'Band Bicep Curls (during rest)', form: 'Stand on the middle of the band, feet hip-width. Elbows fixed at your sides, curl to shoulder height and resist on the way down; the band pulls hardest at the top.', note: 'Band with handles, standing on band', choices: ['Green 30 lb', 'Black 40 lb'], freeWeight: true, metrics: '3 sets · 15–20 · 45 sec', sets: S(3) }
        ]
      },
      {
        label: 'Superset C + D',
        items: [
          { code: 'C', name: 'Dumbbell Tricep Overhead Extension', form: 'Both hands on one DB, feet hip-width, ribs down. Lower behind your head with elbows pointing forward and close together, then extend without letting the elbows flare.', note: 'Single dumbbell', choices: ['20 lb', '25 lb'], freeWeight: true, metrics: '3 sets · 12–15 · 45 sec', sets: S(3) },
          { code: 'D', name: 'Band Tricep Pushdown (during rest)', form: 'Anchor high. Elbows tight to your sides and completely still; only the forearms move. Straighten fully, then let the band draw your hands back up under control.', note: 'Anchor band high on door frame, press down', choices: ['Green 30 lb', 'Black 40 lb'], freeWeight: true, metrics: '3 sets · 15–20 · 45 sec', sets: S(3) }
        ]
      },
      {
        label: '',
        items: [
          { code: 'E', name: 'Band Pallof Press (core + anti-rotation)', form: 'Anchor at chest height. Stand side-on, feet hip-width, and press straight out from your sternum. The whole point is resisting the twist — nothing should rotate. Hold two seconds at full extension.', note: 'Anchor band at chest height on door frame, step sideways, press away', choices: ['Blue 20 lb', 'Green 30 lb'], freeWeight: true, metrics: '3 sets · 12 each side · 60 sec', sets: S(3) }
        ]
      }
    ],
    finLabel: 'Finisher · 2 min',
    finText: 'Plank hold x 45–60 sec',
    finChoices: [],
    footer: 'Total work time: ~30 minutes.',
    footer2: 'Combined with Upper 1: 60 min, full upper split.'
  },
  {
    kicker: 'Lower 1 · mandatory',
    title: 'Quads, Glutes, Posterior Chain',
    duration: '30 min',
    subtitle: '',
    warmLabel: 'Warm-up · 3 min',
    warmText: 'Bodyweight squats x 10 · Band pull-aparts x 15 · Leg swings x 10 each leg',
    mainLabel: 'Main work · 25 min',
    groups: [
      {
        label: 'Superset A + B',
        items: [
          { code: 'A', name: 'Dumbbell Goblet Squats', form: 'Hold the DB at chest height, elbows tucked in. Sit down between your heels, knees tracking over your toes, chest up. Go as deep as you can keep a flat back, then drive through the whole foot.', note: 'One DB at chest, full depth', choices: ['35 lb', '40 lb'], freeWeight: true, metrics: '3 sets · 15–20 · 60 sec', sets: S(3) },
          { code: 'B', name: 'Split Squats (during rest)', form: 'Dumbbells at your sides, one foot forward and the other a long stride back on the ball of the foot. Drop straight down until the back knee nearly touches the floor, torso upright, then drive up through the front leg.', note: 'Long stride back, back knee nearly touches the floor', choices: ['20 lb', '30 lb'], freeWeight: true, metrics: '3 sets · 10–12 each leg · 60 sec', sets: S(3) }
        ]
      },
      {
        label: 'Superset C + D',
        items: [
          { code: 'C', name: 'Dumbbell Romanian Deadlift', form: 'Feet hip-width, knees softly bent and staying that way. Push your hips back and slide the DBs down your thighs, back flat, until you feel the hamstrings pull — usually mid-shin. Stand by driving your hips forward.', note: 'Both DBs or single arm; feel the hamstring stretch', choices: ['35 lb', '40 lb'], freeWeight: true, metrics: '3 sets · 12–15 · 60 sec', sets: S(3) },
          { code: 'D', name: 'Kettlebell Swings (during rest)', form: 'Hinge at the hips and drive them forward — it is not a squat. Arms stay loose, the bell floats up from the hip snap. Heavier bell for hamstring emphasis, pausing a beat at the bottom of the backswing.', note: 'Hip drive, not a squat; heavier bell for hamstring emphasis', choices: ['5 lb', '7.5 lb'], freeWeight: true, metrics: '3 sets · 15–20 · 60 sec', sets: S(3) }
        ]
      },
      {
        label: '',
        items: [
          { code: 'E', name: 'Dumbbell Lateral Lunges', form: 'Take a large step directly to the side and sit that hip back, trailing leg straight, both feet flat and pointing forward. Torso upright. Push off the bent leg to return to the middle.', note: 'Large step directly to the side, torso upright, trailing leg straight', choices: ['25 lb', '35 lb'], freeWeight: true, metrics: '2 sets · 10–12 each side · 45 sec', sets: S(2) }
        ]
      }
    ],
    finLabel: 'Finisher · 2 min',
    finText: 'Glute bridge hold x 45 sec',
    finChoices: [],
    footer: 'Total work time: ~30 minutes.',
    footer2: ''
  },
  {
    kicker: 'Lower 2 · optional',
    title: 'Hip Drive, Core, Leg Finisher',
    duration: '30 min',
    subtitle: 'Optional second session, or standalone complete workout.',
    warmLabel: 'Warm-up · 2 min',
    warmText: 'Bodyweight lunges x 10 each leg · Band pull-aparts x 15 · Cat-cow stretches x 5',
    mainLabel: 'Main work · 26 min',
    groups: [
      {
        label: 'Superset A + B',
        items: [
          { code: 'A', name: 'Dumbbell Lateral Lunges', form: 'Step wide to one side and sit that hip back, keeping the trailing leg straight and both feet flat and pointing forward. Chest tall. Push off the bent leg to return to the middle.', note: 'DB in front of chest or at sides', choices: ['25 lb', '35 lb'], freeWeight: true, metrics: '3 sets · 12 each side · 60 sec', sets: S(3) },
          { code: 'B', name: 'Band Lateral Walk (during rest)', form: 'Band above the knees, quarter-squat position held the whole set. Step sideways under tension without letting the knees cave or the feet click together. Keep the steps small and even.', note: 'Band above knees or at ankles, walk side-to-side with tension', choices: ['Yellow 10 lb', 'Blue 20 lb'], freeWeight: true, metrics: '3 sets · 20 steps each way · 60 sec', sets: S(3) }
        ]
      },
      {
        label: 'Superset C + D',
        items: [
          { code: 'C', name: 'Dumbbell Single-Leg Deadlift', form: 'DB in the hand opposite the standing leg. Hinge at the hip, back leg rising straight behind you in line with your spine, hips level — no opening to the side. Touch the DB toward mid-shin and stand up.', note: 'Balance + posterior chain', choices: ['20 lb', '30 lb'], freeWeight: true, metrics: '3 sets · 10–12 each leg · 60 sec', sets: S(3) },
          { code: 'D', name: 'Dumbbell Romanian Deadlift (during rest)', form: 'Feet hip-width, knees softly bent and staying that way. Push your hips back and let the DBs travel down your legs, back flat, until you feel the hamstrings pull. Stand by driving your hips forward.', note: 'Soft knees held throughout, hips back, DBs travel down the legs', choices: ['35 lb', '40 lb'], freeWeight: true, metrics: '3 sets · 12–15 · 60 sec', sets: S(3) }
        ]
      },
      {
        label: '',
        items: [
          { code: 'E', name: 'Band Pallof Press (core)', form: 'Band at chest height on the door frame. Stand side-on, press straight out from your sternum and resist the twist — nothing rotates. Hold two seconds at full extension, return under control.', note: 'Stand side-on, press out and resist the twist', choices: ['Yellow 10 lb', 'Blue 20 lb', 'Green 30 lb'], freeWeight: true, metrics: '2 sets · 15 each side · 45 sec', sets: S(2) }
        ]
      }
    ],
    finLabel: 'Finisher · 2 min',
    finText: 'Side plank holds x 30 sec each side',
    finChoices: [],
    footer: 'Total work time: ~30 minutes.',
    footer2: 'Combined with Lower 1: 60 min, full lower split — if you run both in one session, skip D here and E on Lower 1, which now overlap.'
  },
  {
    kicker: 'Monday & Wednesday',
    title: 'Kettlebell + Grip Strength',
    duration: '15–20 min',
    subtitle: 'Pyramid up, then back down. Session 1: 1-2-3-4-5-4-3-2-1 — 25 reps. Session 2: peak 6 — 36 reps. +1 rep per session through session 16, then 7.5 lb and restart at 5.',
    warmLabel: 'Warm-up · 2 min',
    warmText: 'Arm circles and wrist mobility · Shoulder rotations x 10',
    mainLabel: 'Workout structure · 15–20 min',
    groups: [
      {
        label: '',
        items: [
          { code: 'A', name: 'Kettlebell Swing Ladder', form: 'Hinge, do not squat: hips back, chest forward, bell swinging under and behind you. Snap the hips to send it out, arms stay loose ropes. Glutes and abs tight at the top; let it fall and catch the hinge.', note: 'Tempo Studio. Rest 30–45 sec between rep increments; exhale hard at the peak of each swing.', choices: ['5 lb', '7.5 lb'], freeWeight: true, metrics: 'Ladder up and down', sets: S(1) }
        ]
      },
      {
        label: '',
        items: [
          { code: 'B', name: 'Hand Gripper Ladder (during kettlebell rest)', form: 'Sit the handle across your palm and the pads of your fingers, not the joints. Close it fully, hold a beat, open all the way. Wrist straight, shoulder relaxed, other hand resting.', note: 'Same pyramid, per hand. Dial today\u2019s resistance before you start; rest 15–30 sec per hand.', choices: ['5 kg', '10 kg', '15 kg'], freeWeight: true, metrics: 'Ladder up and down, each hand', sets: S(1) }
        ]
      }
    ],
    finLabel: 'Finisher · 1 min',
    finText: 'Wrist and forearm stretch',
    finChoices: [],
    footer: 'Total work time: 15–20 minutes per session.',
    footer2: 'Log the session on the next page.'
  }
];

const LOG_ROWS = [
  { date: 'Aug 6', kb: '5', grip: '5', res: '5 kg', note: 'Start' },
  { date: 'Aug 10', kb: '6', grip: '6', res: '5 kg', note: '+1 rep' },
  { date: 'Aug 13', kb: '7', grip: '7', res: '5 kg', note: '+1 rep' },
  { date: 'Aug 15', kb: '8', grip: '8', res: '5 kg', note: '+1 rep' },
  { date: '', kb: '9', grip: '9', res: '', note: '' },
  { date: '', kb: '10', grip: '10', res: '', note: '' },
  { date: '', kb: '11', grip: '11', res: '', note: '' },
  { date: '', kb: '12', grip: '12', res: '', note: '' },
  { date: '', kb: '13', grip: '13', res: '', note: '' },
  { date: '', kb: '14', grip: '14', res: '', note: '' },
  { date: '', kb: '15', grip: '15', res: '', note: '' },
  { date: '', kb: '16', grip: '16', res: '', note: '' }
];

  F.workouts = WORKOUTS;
  F.logRows = LOG_ROWS;
})(window.FITNESS);
