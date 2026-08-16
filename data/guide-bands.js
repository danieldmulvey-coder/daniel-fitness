window.FITNESS = window.FITNESS || {};
(function (F) {

const MOVES = [
  {
    day: 'Upper 1',
    name: 'Band Face Pulls',
    equipment: 'Yellow 10 / blue 20 / green 30 lb',
    phases: [
      { title: 'Setup', lines: ['Anchor at the upper door frame, roughly eye height', 'Face toward the anchor; step back to medium tension', 'Arms extended straight forward at shoulder height', 'Elbows slightly bent, palms facing inward or down', 'Posture upright, core engaged'] },
      { title: 'The pull', lines: ['Exhale as you pull the band toward the face', 'Drive the elbows back and slightly up', 'Keep the elbows high, aligned with the shoulders', 'The band comes apart slightly as you pull', 'Squeeze the shoulder blades together', 'Do not jut the head forward'] },
      { title: 'The return', lines: ['Inhale as you return, slowly and with control', 'Maintain tension in the band', 'Arms return to full extension, slight elbow bend', 'Neutral spine throughout'] }
    ],
    cues: ['“Elbows high” — at or slightly above shoulder height', '“Squeeze shoulder blades” — rear delt and upper back', '“Neutral spine” — don’t lean back excessively', '“Band to face, not head to band” — the face stays neutral', '“Smooth pull” — controlled, no jerking'],
    mistake: 'Elbows dropping below shoulder height, or the head pushing forward.',
    dose: '15–20 reps, 3 sets, 45 sec rest.'
  },
  {
    day: 'Upper 1',
    name: 'Band Lateral Raises',
    equipment: 'Yellow 10 lb / blue 20 lb',
    phases: [
      { title: 'Setup', lines: ['Stand on the band with both feet, shoulder-width apart', 'A band end in each hand', 'Arms at the sides, slight elbow bend', 'Shoulders back, chest proud, posture upright', 'Slight tension in the band at the start'] },
      { title: 'The raise', lines: ['Exhale as you raise the arms out to the sides', 'Lead with the elbows, not the hands', 'Raise until the arms are parallel to the ground', 'Keep the slight elbow bend throughout', 'Gradual, controlled movement'] },
      { title: 'The lower', lines: ['Inhale as you lower with control down the same path', 'Arms return to the sides', 'Keep slight tension in the band', 'Slow lowering phase'] }
    ],
    cues: ['“Lead with elbows” — drive the elbows up and out', '“Slight elbow bend” — maintained, never locked', '“Shoulder height” — raise to parallel with the ground', '“Controlled movement” — no swinging or jerking', '“Band tension” — maintained throughout'],
    mistake: 'Elbows locked straight, raising too high, or jerky movement.',
    dose: '15 reps, 1 set, 60 sec rest.'
  },
  {
    day: 'Upper 2',
    name: 'Band Bicep Curls',
    equipment: 'Green 30 lb / black 40 lb with handles',
    phases: [
      { title: 'Setup', lines: ['Stand on the band with both feet, hip-width apart', 'A handle in each hand, arms at the sides, slight elbow bend', 'Palms facing forward — supinated grip', 'Shoulders back, chest upright, core engaged'] },
      { title: 'The curl', lines: ['Exhale as you curl the handles toward the shoulders', 'Elbows stay stationary at the sides', 'Gradual, controlled movement along the same path', 'Curl until the handles reach shoulder level', 'Feel the biceps contract'] },
      { title: 'The lower', lines: ['Inhale as you lower with control down the same path', 'Arms return to extended, slight elbow bend', 'Maintain tension in the band', 'Slow lowering phase'] }
    ],
    cues: ['“Elbows stationary” — don’t let them move forward or back', '“Palms forward” — keep the supinated grip', '“Smooth arc” — controlled, no jerking', '“Band tension” — maintained throughout', '“Shoulder level” — curl to the shoulders, not higher'],
    mistake: 'Elbows moving forward, the body swinging back, or jerky movement.',
    dose: '15–20 reps, 3 sets, 45 sec rest.'
  },
  {
    day: 'Upper 2',
    name: 'Band Tricep Pushdown',
    equipment: 'Green 30 lb / black 40 lb',
    phases: [
      { title: 'Setup', lines: ['Anchor the band high on the door frame', 'Face away from the anchor, an arm’s length away', 'Hold the band ends, hands together or apart', 'Elbows bent to roughly 90° and close to the body', 'Shoulders relaxed, posture upright, core engaged'] },
      { title: 'The pushdown', lines: ['Exhale as you straighten the elbows', 'Press the hands downward', 'Elbows stay close to the body, don’t flare out', 'Full extension at the bottom, not locked', 'Feel the triceps contract'] },
      { title: 'The return', lines: ['Inhale as you bend the elbows back to 90°', 'Slow, controlled return', 'Maintain tension in the band', 'Elbows stay close throughout'] }
    ],
    cues: ['“Elbows close” — pinned to the sides', '“Full extension” — arms fully straighten at the bottom', '“Controlled descent” — don’t let the band snap back', '“Stationary upper arms” — only the forearms move', '“Band tension” — maintained throughout'],
    mistake: 'Elbows flaring out, or the upper arms moving.',
    dose: '15–20 reps, 3 sets, 45 sec rest.'
  },
  {
    day: 'Upper 2',
    name: 'Band Pallof Press',
    equipment: 'Yellow 10 / blue 20 / green 30 lb',
    phases: [
      { title: 'Setup', lines: ['Anchor the band at chest height on the door frame', 'Stand perpendicular to the anchor, band to one side', 'Feet shoulder-width apart, slight knee bend', 'Hold the band end with both hands at chest level', 'The band creates rotational tension; core braced'] },
      { title: 'The press', lines: ['Exhale as you press straight forward away from the chest', 'Fight the rotational force from the band', 'Press until the arms are extended, slight elbow bend', 'Resist rotation — the torso keeps facing forward', 'Core stays braced throughout'] },
      { title: 'The return', lines: ['Inhale as you return the hands to the chest', 'Slow, controlled return', 'Maintain the anti-rotation tension'] }
    ],
    cues: ['“Anti-rotation core” — fight the twist from the band', '“Straight press” — press directly away, not angled', '“Torso stable” — shoulders and hips stay aligned', '“Core braced” — tight midsection throughout', '“Smooth movement” — controlled, no jerking'],
    mistake: 'Allowing rotation, pressing at an angle, or a loose core.',
    dose: '12 reps each side, 3 sets, 60 sec rest.'
  },
  {
    day: 'Lower 2',
    name: 'Band Lateral Walk',
    equipment: 'Yellow 10 lb / blue 20 lb',
    phases: [
      { title: 'Setup', lines: ['Loop the band above the knees or at the ankles', 'Feet hip-width apart, slight knee bend, weight in the heels', 'The band creates outward resistance', 'Posture upright, hands on the hips or in front, core engaged'] },
      { title: 'The walk', lines: ['Step laterally with the right leg', 'Keep the knees bent and the tension on', 'Feel the glute and outer thigh working', 'Step width 12–18 inches', 'Take 15–20 steps in one direction'] },
      { title: 'The return walk', lines: ['Hold the same stance', 'Step in the opposite direction', 'Same controlled pace and range', 'Band tension maintained; smooth, deliberate steps'] }
    ],
    cues: ['“Knees bent” — hold the quarter-squat position throughout', '“Band tension” — create resistance with the band', '“Glute activation” — outer glutes and hip abductors working', '“Upright posture” — don’t lean forward or back', '“Smooth steps” — controlled, no jerking'],
    mistake: 'Standing upright and losing tension, or stepping too far.',
    dose: '15 steps each direction, 3 sets, 60 sec rest.'
  },
  {
    day: 'Bodyweight',
    name: 'Plank Hold',
    equipment: 'Bodyweight',
    phases: [
      { title: 'Setup', lines: ['Forearm plank: forearms on the ground, shoulders over elbows', 'Elbows at 90°', 'Legs extended behind, toes planted', 'A straight line from head to heels', 'Core engaged, glutes squeezed, head neutral'] },
      { title: 'The hold', lines: ['Maintain the rigid body position', 'Don’t let the hips sag', 'Don’t let the glutes pike up', 'Breathe steadily — don’t hold your breath', 'Steady isometric contraction for time'] },
      { title: 'What it should not look like', lines: ['Hips sagging toward the floor', 'Head dropping', 'Glutes raised into a pike'] }
    ],
    cues: ['“Straight line” — head, hips, heels aligned', '“No sagging” — hips stay level with the shoulders', '“No piking” — the glutes don’t hike up', '“Engaged core” — brace the midsection', '“Squeezed glutes” — keep the tension', '“Steady breathing” — don’t hold your breath'],
    mistake: 'Hips sagging, head dropping, or glutes raised.',
    dose: '30–45 sec, 1 hold.'
  },
  {
    day: 'Bodyweight',
    name: 'Side Plank Holds',
    equipment: 'Bodyweight',
    phases: [
      { title: 'Setup', lines: ['Lie on the right side', 'Support the body on the right forearm, elbow under the shoulder', 'Forearm parallel to the body', 'Legs extended, feet stacked — or staggered for an easier version', 'Straight line from head to heels; core engaged, glutes squeezed'] },
      { title: 'The hold', lines: ['Maintain the rigid side-plank position', 'Hips stay level — no sagging, no piking', 'Head stays neutral', 'Steady isometric contraction, breathing evenly'] },
      { title: 'What it should not look like', lines: ['Hips sagging toward the floor', 'Torso rotating open', 'Head tilted up or down'] }
    ],
    cues: ['“Straight line” — head, hips, heels aligned', '“Level hips” — don’t sag or rotate', '“Engaged core” — obliques working', '“Squeezed glutes” — tension throughout', '“Neutral head” — don’t look up or down', '“Steady breathing” — even and controlled'],
    mistake: 'Hips sagging, the torso rotating, or excessive head tilt.',
    dose: '20–30 sec each side, 1 set per side.'
  }
];

  F.guideMoves = MOVES;
})(window.FITNESS);
