window.FITNESS = window.FITNESS || {};
(function (F) {

const MOVES = [
  {
    day: 'Yoga flow', name: 'Child’s Pose', equipment: 'Rest, recovery, forward fold',
    phases: [
      { title: 'Setup', lines: ['Start on hands and knees, tabletop position', 'Knees wider than hip-width apart', 'Big toes touching or slightly apart', 'Wrists under shoulders, knees under hips'] },
      { title: 'The pose', lines: ['Sink the hips back toward the heels', 'Fold forward, bringing the forehead to the ground', 'Arms rest at the sides or extend forward', 'Shoulders relaxed, away from the ears', 'Breathe deeply into the stretch'] },
      { title: 'Modification', lines: ['A block under the forehead if needed'] }
    ],
    cues: ['“Sink hips back” — hips move toward the heels, not forward', '“Relax shoulders” — away from the ears', '“Breathe” — deep, steady breaths', '“No force” — gentle fold, no pressure on the neck or forehead'],
    mistake: 'Pressing weight into the neck or forehead instead of sinking the hips.',
    dose: 'Hold 30–60 seconds.'
  },
  {
    day: 'Yoga flow', name: 'Cat-Cow Stretch', equipment: 'Spinal mobility, warm-up',
    phases: [
      { title: 'Starting position', lines: ['Hands and knees, tabletop', 'Wrists under shoulders, knees under hips', 'Spine neutral, head in line with the spine'] },
      { title: 'The cow', lines: ['Inhale as you drop the belly', 'Lift the chest, gaze slightly upward', 'Shoulders away from the ears', 'Arch gently through the spine', 'Feel the stretch across the front body'] },
      { title: 'The cat', lines: ['Exhale as you round the spine', 'Drop the chin toward the chest', 'Draw the shoulder blades apart', 'Tuck the tailbone under', 'Feel the stretch across the upper back'] }
    ],
    cues: ['“Match breath to movement” — inhale cow, exhale cat', '“Smooth transitions” — flowing movement between the two', '“Full range” — gentle arch to gentle round', '“No force” — controlled, not aggressive'],
    mistake: 'Forcing the arch or rushing between positions.',
    dose: 'Repeat 5–8 times.'
  },
  {
    day: 'Yoga flow', name: 'Downward-Facing Dog', equipment: 'Full-body stretch, shoulder opener',
    phases: [
      { title: 'Setup', lines: ['Start on hands and knees', 'Press the hands firmly into the ground, shoulders over wrists', 'Spread the fingers wide for stability'] },
      { title: 'The pose', lines: ['Press the hips up and back into an inverted V', 'Head between the arms, spine neutral', 'Heels work toward the ground — they may not touch', 'Shoulder blades draw down the back', 'Gaze toward the belly button'] },
      { title: 'Modification', lines: ['Bend the knees slightly if the hamstrings are tight'] }
    ],
    cues: ['“Push through palms” — distribute the weight evenly', '“Shoulders away from ears” — active shoulders', '“Hips high” — press up and back', '“Neutral spine” — head between the arms', '“Heels toward ground” — don’t force it'],
    mistake: 'Forcing the heels down and rounding the spine to do it.',
    dose: 'Hold 30–60 seconds, or flow through it several times.'
  },
  {
    day: 'Yoga flow', name: 'Low Lunge', equipment: 'Hip flexor stretch, balance',
    phases: [
      { title: 'Setup', lines: ['From downward dog, step the right foot forward between the hands', 'Right knee stacks over the ankle', 'Left leg extends behind, knee on the ground — or lifted', 'Hands on the ground either side of the right foot'] },
      { title: 'The pose', lines: ['Square the hips toward the forward leg', 'Sink the hips forward and down', 'Feel the stretch in the left hip flexor and quad', 'Chest upright, or a slight forward lean', 'Breathe deeply into the stretch'] },
      { title: 'Modification', lines: ['Hands on a block', 'Or lift the hands to the thighs for an upright chest'] }
    ],
    cues: ['“Front knee stacks over ankle” — don’t let it cave inward', '“Hips square” — aligned toward the front of the mat', '“Sink hips forward” — that deepens the stretch', '“Breathe” — deep, steady breaths', '“Upright chest”'],
    mistake: 'The front knee drifting past the ankle or caving inward.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Yoga flow', name: 'Warrior I', equipment: 'Leg strength, hip opener',
    phases: [
      { title: 'Setup', lines: ['Step the right foot forward, or lift the back heel from low lunge', 'Right leg bent, knee over the ankle', 'Left leg extended behind, heel grounded at 45°', 'Torso faces forward, the same direction as the right foot'] },
      { title: 'The pose', lines: ['Square the hips forward', 'Extend the arms overhead, shoulder-width apart', 'Reach up through the fingertips', 'Ground through the outside edge of the back foot', 'Sink deeper into the front knee bend'] },
      { title: 'Modification', lines: ['Hands on the hips', 'Or less hip turn if needed'] }
    ],
    cues: ['“Front knee over ankle” — don’t let it drift forward', '“Square hips” — both hip points face forward', '“Back foot grounded” — 45° angle, heel down', '“Reach through crown” — extend up through the spine', '“Steady gaze” — focus forward'],
    mistake: 'The front knee drifting past the ankle, or the back heel lifting.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Yoga flow', name: 'Warrior II', equipment: 'Leg strength, hip and shoulder opener',
    phases: [
      { title: 'Setup', lines: ['Step the right foot forward, or pivot from Warrior I', 'Right leg bent, knee over the ankle', 'Left leg extended to the side, foot grounded', 'Torso faces perpendicular to the legs'] },
      { title: 'The pose', lines: ['Both hips face to the side', 'Extend the arms out to the sides at shoulder height', 'Palms down or facing forward, shoulders relaxed down', 'Front knee tracks over the second toe', 'Gaze forward over the front fingertips'] },
      { title: 'Modification', lines: ['A shorter stance if needed'] }
    ],
    cues: ['“Hips squared to side” — perpendicular to the front of the mat', '“Front knee over ankle” — aligned vertically', '“Shoulders relaxed” — away from the ears', '“Arms at shoulder height” — palms active', '“Strong stance” — ground through all four corners of the feet'],
    mistake: 'The front knee collapsing inward, or the shoulders creeping up.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Yoga flow', name: 'Triangle Pose', equipment: 'Side body, hamstrings, balance',
    phases: [
      { title: 'Setup', lines: ['Step the right foot forward, or straighten the front leg from Warrior II', 'Both legs straight, both feet grounded', 'Feet hip-width apart', 'Torso upright, arms at the sides'] },
      { title: 'The pose', lines: ['Hinge at the right hip, lower the right hand toward the shin or ground', 'Extend the left arm toward the sky', 'Stack the shoulders, open the chest toward the ceiling', 'Head neutral, or gaze upward', 'Feel the stretch from the top fingertips to the front foot'] },
      { title: 'Modification', lines: ['Bottom hand on a block or the shin', 'Or bend the front leg slightly'] }
    ],
    cues: ['“Hinge at hip” — fold from the hip, not the waist', '“Both legs straight” — but avoid locking the knees', '“Open chest” — stack the shoulders, don’t roll forward', '“Reach through crown” — extend upward', '“Steady gaze”'],
    mistake: 'Folding at the waist and rolling the chest toward the floor.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Both routines', name: 'Seated Spinal Twist', equipment: 'Spine rotation, shoulder opener',
    phases: [
      { title: 'Setup', lines: ['Sit with both legs extended forward', 'Bend the right knee, right foot outside the left thigh', 'The left leg stays extended, or the knee bends'] },
      { title: 'The twist', lines: ['Inhale to lengthen the spine', 'Exhale as you twist to the right', 'Right hand behind for support or on the ground', 'Left elbow to the right knee, or the arm across the chest', 'Draw the navel toward the spine; chest open, shoulders back'] },
      { title: 'Modification', lines: ['A less intense twist', 'Both hands on the ground'] }
    ],
    cues: ['“Lengthen before twisting” — inhale to elongate', '“Twist from core” — initiate the rotation from the belly', '“Shoulders back” — don’t round forward', '“Breathe into twist” — deeper exhales increase it', '“No force” — gentle, controlled rotation'],
    mistake: 'Cranking the twist with the arm instead of rotating from the core.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Both routines', name: 'Supine Figure-4 Stretch', equipment: 'Deep glute stretch, hip opener',
    phases: [
      { title: 'Setup', lines: ['Lie on the back, knees bent, feet on the floor', 'Place the right ankle on top of the left thigh', 'The right leg forms a “4” shape'] },
      { title: 'The stretch', lines: ['Pull the left thigh toward the chest', 'The right glute and hip stretch deeply', 'Head and shoulders stay relaxed on the ground', 'Breathe deeply into the stretch'] },
      { title: 'Modification', lines: ['Less intensity — hands support the thigh instead of pulling'] }
    ],
    cues: ['“Glute engagement” — feel the stretch in the glute', '“Gentle pull” — no jerking, slow and steady', '“Relax shoulders” — stay grounded', '“Deep breathing” — exhales deepen the stretch', '“No force” — only to mild tension'],
    mistake: 'Yanking the thigh in and lifting the head and shoulders off the floor.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Both routines', name: 'Supine Spinal Twist', equipment: 'Lower back release',
    phases: [
      { title: 'Setup', lines: ['Lie on the back, knees bent, feet on the floor', 'Draw both knees slightly toward the chest'] },
      { title: 'The twist', lines: ['Drop both knees to the right side', 'Arms out in a T — or one arm across the chest', 'Turn the head to the left, or keep it neutral if the neck is sensitive', 'Feel the twist through the lower back and spine', 'Relax into gravity'] },
      { title: 'Modification', lines: ['A single knee', 'Or hug the knees if the twist is too intense'] }
    ],
    cues: ['“Let gravity do the work” — don’t force', '“Relaxed shoulders” — they stay flat', '“Neutral head” — or gaze away from the knees', '“Deep breaths” — breathe into the twist', '“No force” — gentle, restorative'],
    mistake: 'Pushing the knees down and peeling the opposite shoulder off the floor.',
    dose: 'Hold 30–45 seconds each side.'
  },
  {
    day: 'Both routines', name: 'Forward Fold', equipment: 'Hamstrings and spine',
    phases: [
      { title: 'Setup', lines: ['Sit or stand with the legs extended', 'Feet hip-width apart or together', 'Posture upright'] },
      { title: 'The fold', lines: ['Hinge at the hips, folding forward', 'Let the arms hang, or reach toward the feet', 'Relax the head and neck', 'Fold as far as is comfortable — no forcing', 'Breathe deeply into the stretch'] },
      { title: 'Modification', lines: ['Bend the knees', 'Use props for support'] }
    ],
    cues: ['“Hinge from hips” — fold from the hip joint, not the waist', '“Relax completely” — let gravity do the work', '“No forcing” — go only to mild sensation', '“Deep breathing” — exhales deepen the fold', '“Hamstring focus” — down the back of the legs'],
    mistake: 'Rounding from the waist and pulling on the feet.',
    dose: 'Hold 45–60 seconds.'
  },
  {
    day: 'Yoga flow', name: 'Corpse Pose (Savasana)', equipment: 'Complete relaxation',
    phases: [
      { title: 'Setup', lines: ['Lie on the back with the legs extended', 'Arms at the sides, palms facing up', 'Feet naturally apart, not touching', 'Head neutral, looking up'] },
      { title: 'The pose', lines: ['Release all tension', 'Completely still, no movement', 'Eyes closed', 'Deep, steady breathing', 'Mind relaxed'] },
      { title: 'Modification', lines: ['A pillow under the knees or head if needed'] }
    ],
    cues: ['“Complete release” — let go of all tension', '“Still body” — no movement', '“Easy breathing” — natural, easy breaths', '“No rush” — savasana is not a race', '“Mental calm” — let the mind settle'],
    mistake: 'Cutting it short and standing straight up.',
    dose: 'Hold 30–60 seconds, or longer.'
  },
  {
    day: 'Daily stretch', name: 'Neck Mobility', equipment: 'Standing · 1 min',
    phases: [
      { title: 'Neck circles', lines: ['Stand upright, feet hip-width apart', 'Relax the shoulders', 'Slowly rotate the head in full circles', '15 sec clockwise, 15 sec counterclockwise', 'Smooth, controlled motion'] },
      { title: 'Ear-to-shoulder stretch', lines: ['Stand upright', 'Slowly bring the right ear toward the right shoulder', 'Stop at a gentle stretch, never painful', 'Hold 15 sec each side', 'Shoulders stay relaxed'] },
      { title: 'What not to do', lines: ['Pulling the head down with the hand', 'Lifting the shoulder to meet the ear'] }
    ],
    cues: ['“Relax the neck” — don’t force the circle', '“Gentle stretch, never force” — mild tension only'],
    mistake: 'Forcing range at the neck — the one place to be most conservative.',
    dose: '1 min total.'
  },
  {
    day: 'Daily stretch', name: 'Doorway Chest Stretch', equipment: 'Doorway · 30 sec each side',
    phases: [
      { title: 'Setup', lines: ['Stand in a doorway', 'Place the right forearm on the door frame at shoulder height'] },
      { title: 'The stretch', lines: ['Step forward until there is a gentle stretch across the chest', 'Keep the shoulders back and down', 'Hold 30 sec each side'] },
      { title: 'What not to do', lines: ['Feeling it in the shoulder joint rather than the chest', 'Shrugging the shoulder up'] }
    ],
    cues: ['“Feel it across the chest, not the shoulder joint”'],
    mistake: 'Stepping too far and loading the front of the shoulder.',
    dose: '30 sec each side.'
  },
  {
    day: 'Daily stretch', name: 'Cross-Body Shoulder Stretch', equipment: 'Standing · 30 sec each side',
    phases: [
      { title: 'Setup', lines: ['Stand upright', 'Bring the right arm across the chest'] },
      { title: 'The stretch', lines: ['Use the left hand to gently pull the right elbow closer to the body', 'Hold 30 sec each side', 'Shoulders stay relaxed'] },
      { title: 'Reverse shoulder stretch', lines: ['Feet hip-width apart, clasp the hands behind the back', 'Straighten the arms, draw the hands toward the ground', 'Lift the chest; hold 30 sec, breathing deeply'] }
    ],
    cues: ['“Gentle pull” — rear deltoid and back of the shoulder', '“Chest proud, hands draw toward the ground” — for the reverse stretch'],
    mistake: 'Pulling hard at the elbow instead of easing into the position.',
    dose: '30 sec each side, then 30 sec for the reverse stretch.'
  },
  {
    day: 'Daily stretch', name: 'Butterfly Stretch', equipment: 'Seated · 45 sec',
    phases: [
      { title: 'Setup', lines: ['Sit on the ground', 'Bring the soles of the feet together, knees out to the sides'] },
      { title: 'The stretch', lines: ['Gently press the knees toward the ground with the elbows', 'Fold forward slightly if you want more', 'Hold 45 sec', 'Relax — don’t force'] },
      { title: 'Modification', lines: ['Sit on a cushion to tilt the pelvis forward', 'Feet further from the body for less intensity'] }
    ],
    cues: ['“Feel it in the hip and inner thighs”', '“Relax, don’t force”'],
    mistake: 'Bouncing the knees, or rounding hard through the low back.',
    dose: '45 sec.'
  },
  {
    day: 'Daily stretch', name: 'Pigeon Pose', equipment: 'Floor · 45 sec each side',
    phases: [
      { title: 'Setup', lines: ['Start in downward dog or tabletop', 'Bring the right knee forward behind the right wrist', 'The right shin roughly perpendicular to the left leg'] },
      { title: 'The stretch', lines: ['Fold forward over the right leg', 'Hold 45 sec each side', 'Deep glute stretch'] },
      { title: 'Modification', lines: ['Figure-4 lying down instead, if the hip or knee objects'] }
    ],
    cues: ['“Keep the hips level”', '“Fold from the hip, not the waist”'],
    mistake: 'Letting one hip drop and twisting the knee.',
    dose: '45 sec each side.'
  },
  {
    day: 'Daily stretch', name: '90/90 Hip Flexor Stretch', equipment: 'Floor · 45 sec each side',
    phases: [
      { title: 'Setup', lines: ['Lie on the right side', 'Right knee bent at 90° in front of the body', 'Left knee bent at 90° behind the body'] },
      { title: 'The stretch', lines: ['Fold forward over the right leg', 'Hold 45 sec each side', 'Deep hip and hip-flexor stretch'] },
      { title: 'Modification', lines: ['Support the torso on the forearms rather than folding fully'] }
    ],
    cues: ['“Feel it in the hip flexors and glute”'],
    mistake: 'Collapsing the trunk instead of hinging over the front leg.',
    dose: '45 sec each side.'
  },
  {
    day: 'Daily stretch', name: 'Standing Calf Stretch', equipment: 'Wall or step · 30 sec each side',
    phases: [
      { title: 'Setup', lines: ['Face a wall or support', 'Step the right foot forward, left leg extended back'] },
      { title: 'The stretch', lines: ['The heel of the back foot stays grounded', 'Lean into the wall to feel the calf stretch', 'Hold 30 sec each side'] },
      { title: 'What not to do', lines: ['The back heel lifting off the floor', 'Leaning in so far the ankle takes the strain'] }
    ],
    cues: ['“Heel stays grounded”', '“Lean in carefully”'],
    mistake: 'Letting the back heel come up, which removes the stretch entirely.',
    dose: '30 sec each side.'
  },
  {
    day: 'Daily stretch', name: 'Supine Knee-to-Chest', equipment: 'Floor · 30 sec',
    phases: [
      { title: 'Setup', lines: ['Lie on the back', 'Pull both knees toward the chest'] },
      { title: 'The stretch', lines: ['Wrap the arms around the shins', 'Hold 30 sec', 'Gentle lower-back release'] },
      { title: 'Modification', lines: ['One knee at a time, the other foot flat on the floor'] }
    ],
    cues: ['“Relax — let gravity do the work”'],
    mistake: 'Hauling the knees in hard and lifting the head.',
    dose: '30 sec.'
  },
  {
    day: 'Daily stretch', name: 'Stretching Best Practices', equipment: 'Reference',
    phases: [
      { title: 'Before you stretch', lines: ['Warm up 5–10 minutes first', 'Best done post-workout or in the evening'] },
      { title: 'While stretching', lines: ['Hold each stretch 30–60 seconds', 'Stretch to mild tension, never pain', 'Breathe deeply — never hold your breath'] },
      { title: 'Over time', lines: ['Consistent daily stretching beats occasional intense stretching', 'Most flexibility gains come from frequency, not force'] }
    ],
    cues: ['“Mild tension, never pain”', '“Consistency over intensity”'],
    mistake: 'Stretching cold, or chasing depth instead of frequency.',
    dose: 'Daily, or 3–5x per week minimum.'
  }
];

  F.guideMoves = MOVES;
})(window.FITNESS);
