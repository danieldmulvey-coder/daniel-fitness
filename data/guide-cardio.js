window.FITNESS = window.FITNESS || {};
(function (F) {

const MOVES = [
  {
    day: 'Cardio A · high-intensity', name: 'Burpees', equipment: 'Bodyweight · 30 sec work',
    phases: [
      { title: 'Start, then squat down', lines: ['Stand upright, feet hip-width apart, arms at the sides', 'Core ready to engage, weight in the heels', 'Lower into a squat', 'Place the hands on the ground in front of the feet', 'Weight stays in the heels as you transition'] },
      { title: 'Plank jump, optional push-up', lines: ['Jump or step the feet back to a plank', 'Hands under the shoulders, body straight, no sagging hips', 'Brief pause at the plank', 'Optional push-up: lower the chest, elbows 45° from the body', 'Full push-up, or knees down as a modification'] },
      { title: 'Jump back, then jump up', lines: ['Jump the feet forward to the squat — or step if needed', 'Explode upward from the squat', 'Arms reach overhead or forward, full body extension', 'Land softly with bent knees'] }
    ],
    cues: ['“Explosive” — power in the upward jump', '“Full plank position” — straight line from head to heels', '“Controlled landing” — soft knees on descent', '“Modification OK” — step instead of jump if needed', '“Continuous movement” — flow through each phase'],
    mistake: 'Modifications: step back instead of jumping, skip the push-up (squat–plank–jump), or use knee push-ups.',
    dose: '30 sec work / 30 sec rest, 4 rounds. As fast as possible with good form — the last 1–2 reps should be challenging.'
  },
  {
    day: 'Cardio A · high-intensity', name: 'Mountain Climbers', equipment: 'Bodyweight · 30 sec work',
    phases: [
      { title: 'Starting position', lines: ['Plank position, hands under the shoulders', 'Body in a straight line from head to heels', 'Core engaged, toes on the ground'] },
      { title: 'The movement', lines: ['Drive the right knee toward the chest, controlled', 'Return the right leg to plank', 'Drive the left knee toward the chest at the same time', 'Alternate legs in rapid succession', 'Hold the plank — no sagging hips, no piking'] },
      { title: 'Modification', lines: ['Slower pace if needed', 'One leg at a time', 'Reduce the height of the knee drive'] }
    ],
    cues: ['“Plank rigid” — straight line throughout', '“Knees toward chest” — drive them up, not forward', '“Core engaged” — no hip sag or pike', '“Steady torso” — minimal rotation', '“Continuous rhythm” — smooth, flowing movement'],
    mistake: 'Hips sagging or piking, minimal knee drive, upper body rotating.',
    dose: '30 sec work / 30 sec rest, 4 rounds. Faster is higher intensity — speed with form.'
  },
  {
    day: 'Cardio A · high-intensity', name: 'Jumping Jacks', equipment: 'Bodyweight · 30 sec work',
    phases: [
      { title: 'Starting position', lines: ['Stand upright, feet together, arms at the sides', 'Posture upright, core engaged'] },
      { title: 'The jump', lines: ['Jump upward explosively', 'Spread the feet wider than hip-width at the same time', 'Arms raise out to the sides or overhead', 'Full body extension; land with bent knees'] },
      { title: 'The return', lines: ['Jump back to the start', 'Feet come together, arms return to the sides', 'Soft landing with bent knees'] }
    ],
    cues: ['“Full extension in air” — arms overhead, legs wide', '“Soft landings” — bend the knees on landing', '“Upright posture” — chest up, core engaged', '“Continuous rhythm” — steady, flowing pace', '“Full range” — feet fully spread, arms fully extended'],
    mistake: 'Minimal arm swing, feet barely spreading, stiff jerky movement, poor posture.',
    dose: '30 sec work / 30 sec rest, 4 rounds. One jump is one rep. Modification: step out instead of jumping.'
  },
  {
    day: 'Cardio A · high-intensity', name: 'High Knees', equipment: 'Bodyweight · 30 sec work',
    phases: [
      { title: 'Starting position', lines: ['Stand upright, feet hip-width apart', 'Arms ready to swing with the movement', 'Core engaged'] },
      { title: 'The movement', lines: ['Drive the right knee toward the chest', 'Drive the left arm forward at the same time', 'The left knee drives up as the right comes down', 'Alternating rapid knee drives', 'Torso stays upright, arms pump naturally'] },
      { title: 'Modification', lines: ['Lower knee height', 'Slower pace', 'Lighter intensity'] }
    ],
    cues: ['“Knees to chest” — drive them high', '“Upright posture” — lean slightly forward but stay tall', '“Arm swing” — natural arm pumping', '“Continuous rhythm” — steady, rapid pace', '“Hip flexor engagement” — feel the hip flexors working'],
    mistake: 'Knees barely rising, excessive forward lean, minimal arm swing, jerky movement.',
    dose: '30 sec work / 30 sec rest, 4 rounds. Higher knees is higher intensity.'
  },
  {
    day: 'Cardio B · steady', name: 'Jog in Place', equipment: 'Bodyweight · base cardio',
    phases: [
      { title: 'Starting position', lines: ['Stand upright, feet hip-width apart', 'Arms at a 90° elbow bend', 'Posture upright'] },
      { title: 'The movement', lines: ['Lift the right foot slightly off the ground, then the left', 'Alternating lifting motion', 'Arms pump naturally with the legs', 'Rhythmic, steady pace; knees drive forward and up'] },
      { title: 'Tempo', lines: ['Moderate pace — comfortable but elevated', 'You should be able to speak but not sing'] }
    ],
    cues: ['“Natural rhythm” — steady, sustainable pace', '“Arm swing” — pump the arms naturally', '“Upright posture” — stay tall, minimal forward lean', '“Steady breathing” — even and controlled', '“Mid-foot landing” — land on the middle of the foot, not the heel'],
    mistake: 'Landing heel-first, or drifting into a forward lean.',
    dose: '45 sec at moderate pace, twice per 6-minute round (minutes 0–2: jog 45 sec, side-shuffle 30 sec, jog 45 sec).'
  },
  {
    day: 'Cardio B · steady', name: 'Side-Shuffle Steps', equipment: 'Bodyweight',
    phases: [
      { title: 'Starting position', lines: ['Stand upright, feet hip-width apart', 'Posture upright, arms ready'] },
      { title: 'The movement', lines: ['Shuffle right by stepping the right foot to the side', 'Bring the left foot to meet it', 'Shift the weight smoothly side to side', 'Arms move naturally or stay at the sides', 'Athletic stance with a slight knee bend'] },
      { title: 'Tempo', lines: ['Moderate, controlled pace', 'Smooth, gliding movements'] }
    ],
    cues: ['“Side to side” — move laterally, not forward or back', '“Smooth transfers” — weight shifts smoothly between the feet', '“Slight knee bend” — stay athletic and engaged', '“Controlled pace” — steady and sustainable', '“Wide enough stance” — the feet move substantially'],
    mistake: 'Minimal foot travel, or standing too upright to stay athletic.',
    dose: '30 sec per 6-minute round.'
  },
  {
    day: 'Cardio B · steady', name: 'Push-ups', equipment: 'Bodyweight',
    phases: [
      { title: 'Starting position', lines: ['Plank: hands under the shoulders, slightly wider than shoulder-width', 'Body in a straight line from head to heels', 'Core engaged, toes on the ground'] },
      { title: 'The descent', lines: ['Bend the elbows, lower the chest toward the ground', 'Elbows at 45° from the body, not flared out', 'Lower until the chest nearly touches, or to an appropriate depth', 'Maintain the straight line'] },
      { title: 'The ascent', lines: ['Push through the palms', 'Straighten the arms back to the plank', 'Exhale as you push up'] }
    ],
    cues: ['“Straight line” — the body stays aligned', '“Elbows at 45 degrees” — not flared, not tucked', '“Full range of motion” — chest down, arms extended', '“Controlled pace” — no bouncing', '“Core tight” — no sagging hips or piking'],
    mistake: 'Hips sagging, elbows flared excessively, minimal depth, jerky movement. Modify with knee, incline or wall push-ups.',
    dose: '30 sec per 6-minute round.'
  },
  {
    day: 'Cardio B · steady', name: 'Lunges', equipment: 'Bodyweight',
    phases: [
      { title: 'Starting position', lines: ['Stand upright, feet hip-width apart', 'Hands on the hips or across the chest'] },
      { title: 'The lunge', lines: ['Step forward with the right leg', 'Lower the hips by bending both knees', 'Right knee bends to 90°, over the ankle', 'Left knee lowers toward the ground', 'Torso stays upright, core engaged'] },
      { title: 'The return', lines: ['Push through the right heel', 'Return to standing', 'The left leg steps forward next — alternating lunges', 'Continuous forward lunging motion'] }
    ],
    cues: ['“Step length” — far enough to reach a 90° knee bend', '“Front knee over ankle” — it doesn’t drift past the toes', '“Upright torso” — chest up, core engaged', '“Controlled descent” — no sudden dropping', '“Alternate legs” — step forward alternately'],
    mistake: 'Short steps, the front knee drifting past the toes, or dropping into the bottom. Modify with a shorter step, less depth, or wall support.',
    dose: '30 sec walking lunges and 30 sec alternating lunges per 6-minute round.'
  },
  {
    day: 'Cardio B · flow', name: 'Warrior Flows', equipment: 'Bodyweight · 1 min',
    phases: [
      { title: 'Starting position', lines: ['Warrior I: right leg forward and bent, left leg back and extended'] },
      { title: 'Warrior I to II flow', lines: ['From Warrior I, open the hips to Warrior II', 'Rotate the torso, extend the arms', 'Hips face perpendicular to the front of the space', 'Both legs engaged and strong'] },
      { title: 'Back to Warrior I', lines: ['Rotate the torso back to Warrior I', 'Hips square forward', 'Smooth, flowing transition'] }
    ],
    cues: ['“Smooth transitions” — flowing, not jerky', '“Engaged legs” — both legs strong throughout', '“Hip mobility” — feel the hip opening in Warrior II', '“Breath-paced” — coordinate with the breath', '“Centered focus” — balance and stability'],
    mistake: 'Rushing the rotation. Modify with a shorter stance, hands on hips, or less hip rotation.',
    dose: '1 min per round. One rep is a full cycle — I to II to I — with slow, controlled transitions.'
  },
  {
    day: 'Cardio B · flow', name: 'Standing Balance Work', equipment: 'Bodyweight · 1 min',
    phases: [
      { title: 'Single-leg hold', lines: ['Stand on the right leg', 'Left leg raised, knee bent or extended', 'Engage the core for balance', 'Hold 30 sec, then switch legs'] },
      { title: 'Figure-4 balance', lines: ['Stand on the right leg', 'Left ankle rests on the right thigh', 'Hold for balance, engaging glutes and core', 'Switch legs'] },
      { title: 'Tempo', lines: ['Hold the static positions', 'Focus on stability, not speed'] }
    ],
    cues: ['“Single-leg stability” — one leg supports the whole body', '“Core engaged” — tight midsection for balance', '“Steady gaze” — focus on a single point', '“Controlled breathing” — steady breaths', '“Muscle engagement” — feel the glutes and quads working'],
    mistake: 'Chasing time instead of stability.',
    dose: '1 min per round, split between the two holds.'
  },
  {
    day: 'Both cardio sessions', name: 'General Cardio Principles', equipment: 'Reference',
    phases: [
      { title: 'Progression', lines: ['Weeks 1–2: focus on form, lower intensity', 'Week 3 onward: increase pace, intensity, or reps', 'Listen to the body and modify as needed'] },
      { title: 'Heart-rate zones', lines: ['Warm-up: 50–60% of max HR', 'Cardio A, high-intensity: 80–90%', 'Cardio B, steady: 60–75%', 'Cool-down: 50–60%'] },
      { title: 'Breathing & recovery', lines: ['Never hold your breath; exhale during hard efforts', '1–2 min easy movement between hard intervals', 'Active recovery beats a complete stop', 'The cool-down is not optional'] }
    ],
    cues: ['“Form over speed” — proper form prevents injury', '“Quality over quantity” — good reps matter more than more reps', '“Modify when form breaks down” — not after'],
    mistake: 'Holding the breath through hard efforts, or skipping the cool-down.',
    dose: 'Applies to both cardio sessions, every time.'
  }
];

  F.guideMoves = MOVES;
})(window.FITNESS);
