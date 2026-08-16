window.FITNESS = window.FITNESS || {};
(function (F) {

const R = n => Array.from({ length: n }, (_, i) => i + 1);

const PAGES = [
  {
    kicker: 'Cardio A · optional',
    title: 'High-Intensity Intervals',
    duration: '20 min',
    intro: 'Insanity-inspired — no equipment, max effort, short rest. Go at your own pace; modify any move as needed.',
    prog: { label: 'Work / rest by session', pills: ['1–4 · 30/30', '5–8 · 35/25', '9–12 · 40/20', '13–16 · 45/15', '17+ · 30/30 ×5'] },
    record: { boxes: R(4), boxLabel: 'Rounds at the prescribed ratio', write: 'Burpees in round 1' },
    blocks: [
      {
        label: 'Warm-up · 2 min',
        sub: '',
        items: [
          { name: 'Light jog in place', detail: '', time: '30 sec' },
          { name: 'Arm circles and leg swings', detail: '', time: '30 sec' },
          { name: 'Jumping jacks', detail: '', time: '30 sec' },
          { name: 'High knees', detail: '', time: '30 sec' }
        ]
      },
      {
        label: 'Main circuit · 16 min',
        sub: '4 rounds · 30 sec work, 30 sec rest per move',
        items: [
          { name: 'Burpees', detail: 'Full-body explosive move: drop to plank, push-up, jump up. Modify: step back instead of jump.', time: '30 sec' },
          { name: 'Mountain Climbers', detail: 'Plank position, drive knees to chest alternately, fast pace. Keep the core tight.', time: '30 sec' },
          { name: 'Jumping Jacks', detail: 'Classic full-body cardio. Modify: step side-to-side.', time: '30 sec' },
          { name: 'High Knees', detail: 'Run in place, knees to waist height, fast pace. Stay upright, use the arms.', time: '30 sec' }
        ]
      },
      {
        label: 'Rest · 2 min',
        sub: '',
        items: [
          { name: 'Walk in place, slow breathing', detail: 'Drink water.', time: '2 min' }
        ]
      },
      {
        label: 'Cool-down · 2 min',
        sub: '',
        items: [
          { name: 'Walking, gradually slowing', detail: '', time: '1 min' },
          { name: 'Stretching — quad, calf, chest', detail: '', time: '1 min' }
        ]
      }
    ],
    notes: [
      'Max effort within your ability — not a speed competition.',
      'Modify any move to keep intensity high without injury.',
      'Heart rate should stay elevated through the work intervals.',
      'Rest intervals are active recovery — keep moving slowly.',
      'Counted by session, never by date — a skipped week does not advance the ratio.'
    ],
    footer: 'Total time: ~20 minutes.'
  },
  {
    kicker: 'Cardio B · optional',
    title: 'Steady Cardio + Flow',
    duration: '25 min',
    intro: 'P90x-inspired — controlled intensity, flowing transitions, rhythm-based. Good for active recovery while keeping the heart rate elevated, with yoga elements for balance and mobility.',
    blocks: [
      {
        label: 'Warm-up · 2 min',
        sub: '',
        items: [
          { name: 'Light march in place', detail: '', time: '30 sec' },
          { name: 'Arm circles and torso rotations', detail: '', time: '30 sec' },
          { name: 'Gentle leg swings', detail: '', time: '30 sec' },
          { name: 'Light jumping jacks', detail: '', time: '30 sec' }
        ]
      },
      {
        label: 'Round · minutes 0–2',
        sub: 'Cardio base · 3 rounds of 6 min',
        items: [
          { name: 'Jog in place', detail: 'Moderate pace', time: '45 sec' },
          { name: 'Side-shuffle steps', detail: '', time: '30 sec' },
          { name: 'Jog in place', detail: 'Moderate pace', time: '45 sec' }
        ]
      },
      {
        label: 'Round · minutes 2–4',
        sub: 'Strength cardio',
        items: [
          { name: 'Push-ups', detail: 'Modify as needed', time: '30 sec' },
          { name: 'Lunges', detail: 'Alternating legs', time: '30 sec' },
          { name: 'Plank hold', detail: '', time: '30 sec' },
          { name: 'Walking lunges', detail: '', time: '30 sec' }
        ]
      },
      {
        label: 'Round · minutes 4–6',
        sub: 'Flow and balance',
        items: [
          { name: 'Warrior flows', detail: 'Warrior I → II → reverse, smooth transitions', time: '1 min' },
          { name: 'Standing balance work', detail: 'Single-leg holds, figure-4 balance', time: '1 min' }
        ]
      },
      {
        label: 'Rest and flow · 3 min',
        sub: '',
        items: [
          { name: 'Child\u2019s pose', detail: '', time: '30 sec' },
          { name: 'Cat-cow stretches', detail: '', time: '30 sec' },
          { name: 'Downward dog', detail: 'Hold with gentle movement', time: '1 min' }
        ]
      },
      {
        label: 'Cool-down yoga · 2 min',
        sub: '',
        items: [
          { name: 'Seated forward fold', detail: '', time: '30 sec' },
          { name: 'Butterfly stretch', detail: '', time: '30 sec' },
          { name: 'Supine spinal twist', detail: 'Both sides', time: '30 sec' },
          { name: 'Savasana', detail: 'Lying rest', time: '30 sec' }
        ]
      }
    ],
    splitAt: 3,
    contIntro: 'Each 6-minute round runs the three segments in order. Repeat the round three times, then rest.',
    record: { boxes: R(3), boxLabel: 'Rounds done', optional: true, yesno: 'Could you have held a conversation at the end of round 2?' },
    notes: [
      'Deliberately not progressed. This is active recovery, and the session that becomes work is the first one dropped.',
      'If the talk test is No most sessions, this has become Cardio A and the intensity comes down.',
      'The one thing that may change: add a 4th round if 25 minutes stops feeling like enough. That is a choice about how long you want to move, not a progression.',
      'Moderate intensity — you should be able to talk but feel the heart rate.',
      'Transitions are smooth and controlled, not rushed.',
      'Modify push-ups and lunges as needed — form over intensity.',
      'Can be done 2–3x per week, Friday to Sunday, as active recovery.'
    ],
    footer: 'Total time: ~25 minutes.'
  },
  {
    kicker: 'Any day · optional',
    title: 'Daily Morning Yoga Flow',
    duration: '10 min',
    intro: 'Ease into the day. Focus on breath, mobility, and recovery between strength days.',
    prog: { label: 'Hold time by session', pills: ['1–6 · 30 sec', '7–12 · 40 sec', '13+ · 45 sec'] },
    record: { boxes: R(7), boxLabel: 'Flow positions completed', line: 'A pose that would not hold today' },
    splitAt: 2,
    contIntro: 'Come down slowly. Breath stays the anchor through the cool-down.',
    blocks: [
      {
        label: 'Warm-up · 1 min',
        sub: '',
        items: [
          { name: 'Child\u2019s pose', detail: '', time: '5 breaths' },
          { name: 'Cat-cow stretches', detail: '', time: 'x 5 each' }
        ]
      },
      {
        label: 'Main flow · 7 min',
        sub: 'Breath is the anchor',
        items: [
          { name: 'Downward Dog to Upward Dog', detail: 'Sun salutation prep. Coordinate movement with breath.', time: '5 reps' },
          { name: 'Standing Forward Fold', detail: 'Relax the neck. Gentle hamstring and spine stretch.', time: '30 sec' },
          { name: 'Low Lunge', detail: 'Alternating sides. Feel the hip flexor and quad stretch.', time: '30 sec each' },
          { name: 'Warrior I', detail: 'Alternating sides. Ground the feet, lengthen the spine.', time: '30 sec each' },
          { name: 'Warrior II', detail: 'Alternating sides. Open the hips, extend the arms.', time: '30 sec each' },
          { name: 'Triangle Pose', detail: 'Alternating sides. Full-body stretch and balance work.', time: '30 sec each' },
          { name: 'Seated Spinal Twist', detail: 'Alternating sides', time: '30 sec each' }
        ]
      },
      {
        label: 'Cool-down · 2 min',
        sub: '',
        items: [
          { name: 'Easy seated forward fold', detail: '', time: '30 sec' },
          { name: 'Supine figure-4 stretch', detail: 'Both sides', time: '30 sec each' },
          { name: 'Corpse pose (savasana)', detail: 'Then roll to seated and come to standing.', time: '30 sec' }
        ]
      }
    ],
    notes: [
      'The sequence never changes; only the clock does. The 5 sun-salutation reps stay at 5 throughout — that is a warm-up, not a set.',
      'A pose that consistently will not hold is information about a tight hip, not a discipline problem. Write it down.',
      'Move at your own pace; hold each pose only as long as it feels good.',
      'Exhale into stretches, inhale to lengthen.',
      'This is recovery and mobility work, not strength training.',
      'Any day of the week — before a strength session, after, or as a standalone recovery day.',
      'Daily, or 2–3x per week as needed.'
    ],
    footer: 'Total time: ~10 minutes.'
  },
  {
    kicker: 'Any day · optional',
    title: 'Daily Stretch',
    duration: '10 min',
    intro: 'Consistent gentle stretching builds long-term mobility and flexibility. Hold each stretch 30–45 sec, never bounce, breathe deeply.',
    blocks: [
      {
        label: 'Neck · 1 min',
        sub: '',
        items: [
          { name: 'Neck circles', detail: 'Slow, each direction', time: '15 sec' },
          { name: 'Ear-to-shoulder stretch', detail: 'Each side', time: '15 sec' }
        ]
      },
      {
        label: 'Shoulder + chest · 1.5 min',
        sub: '',
        items: [
          { name: 'Doorway chest stretch', detail: 'Each side', time: '30 sec' },
          { name: 'Cross-body shoulder stretch', detail: 'Each side', time: '30 sec' },
          { name: 'Reverse shoulder stretch', detail: 'Hands behind the back', time: '30 sec' }
        ]
      },
      {
        label: 'Spine + torso · 1.5 min',
        sub: '',
        items: [
          { name: 'Seated spinal twist', detail: 'Each side', time: '30 sec' },
          { name: 'Cat-cow stretches', detail: 'Gentle', time: '10 reps' },
          { name: 'Supine spinal twist', detail: 'Lying on the back, each side', time: '30 sec' }
        ]
      },
      {
        label: 'Hips + glutes · 3 min',
        sub: '',
        items: [
          { name: 'Butterfly stretch', detail: 'Soles of the feet together', time: '45 sec' },
          { name: 'Pigeon pose', detail: 'Or figure-4 lying down, each side', time: '45 sec' },
          { name: '90/90 hip flexor stretch', detail: 'Each side', time: '45 sec' }
        ]
      },
      {
        label: 'Hamstrings + calves · 1.5 min',
        sub: '',
        items: [
          { name: 'Seated forward fold', detail: '', time: '45 sec' },
          { name: 'Standing calf stretch', detail: 'Wall or step, each side', time: '30 sec' }
        ]
      },
      {
        label: 'Lower back + psoas · 1 min',
        sub: '',
        items: [
          { name: 'Supine knee-to-chest', detail: 'Both knees', time: '30 sec' },
          { name: 'Child\u2019s pose', detail: '', time: '30 sec' }
        ]
      }
    ],
    splitAt: 3,
    bench: {
      label: 'Monthly benchmarks · measured on the first of the month only',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      rows: ['Forward fold — mid-shin / ankle / floor with fingers / floor with palms', 'Butterfly — knee to floor, in inches', 'Standing calf — back heel stays flat, full stride: yes / no']
    },
    notes: [
      'Deliberately fixed. The dose at session 5 is the dose at session 500 — a daily habit earns its value from being frictionless and identical.',
      'Per session, record one thing: done, or not done. Consistency is the only metric here.',
      'The benchmarks move on a scale of weeks. Checking them weekly just produces noise that reads as going backwards.',
      'Any day — morning, evening, or between workouts.',
      'Most effective 2–3 hours post-workout, or in the evening.',
      'Never force a stretch; go to mild tension, not pain.',
      'Consistent daily stretching beats occasional intense stretching.',
      'Breathe deeply — never hold your breath.',
      'Split it if time is short: 5 min morning, 5 min evening.',
      'Daily for best gains, or 3–5x per week minimum.'
    ],
    footer: 'Total time: ~10 minutes.'
  }
];

  F.optionalPages = PAGES;
})(window.FITNESS);
