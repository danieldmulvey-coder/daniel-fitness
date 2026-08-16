window.FITNESS = window.FITNESS || {};
(function (F) {

const MOVES = [
  {
    day: 'Monday, Wednesday & Lower 1', name: 'Kettlebell Swings', equipment: '5 lb → 7.5 lb at week 17',
    phases: [
      { title: 'Setup & starting position', lines: ['Feet shoulder-width apart, toes slightly outward', 'Kettlebell on the ground between the feet', 'Hinge at the hips, grip the handle with both hands', 'Back neutral, chest upright, shoulders retracted', 'Knees slightly bent, weight in the heels'] },
      { title: 'The swing mechanics', lines: ['Backswing: drive the hips back explosively, arms relaxed', 'The bell swings to chest/shoulder height from hip drive', 'Weight stays in the heels; core engaged, spine neutral', 'Peak: arms extended, bell at shoulder height or above', 'Explosive exhale at the peak'] },
      { title: 'The downswing', lines: ['Let the bell fall under gravity, not muscled down', 'Guide it between the legs with soft knees', 'Prepare the next swing with a hip hinge', 'One fluid, continuous movement'] }
    ],
    cues: ['“Hip hinge, not squat” — the movement is at the hips, not the knees', '“Explosive at the top” — power comes from glutes and hamstrings', '“Relaxed arms” — the arms are guides, not the work', '“Neutral spine” — no rounding of the lower back at the bottom'],
    mistake: 'Dropping into a squat position — keep the hips high at the start.',
    dose: 'Ladder up and down. Session 1: 5 reps, +1 per session through session 16 (20 reps). Session 17: 7.5 lb, restart at 5.'
  },
  {
    day: 'Monday & Wednesday', name: 'Hand Gripper', equipment: '5–60 kg adjustable',
    phases: [
      { title: 'Starting position', lines: ['Sit or stand, arm at 90° at the elbow', 'Gripper at chest height', 'Wrist neutral — not bent up or down', 'Shoulders relaxed, core stable'] },
      { title: 'The grip squeeze', lines: ['Squeeze the handles together with hand and forearm', 'Full contraction — handles all the way together', 'Hold one second at the peak, squeeze hard', 'No wrist twist during the squeeze', 'Exhale on the squeeze, inhale on release'] },
      { title: 'The release', lines: ['Release slowly back to open, with control', 'Do not let it snap open', 'Wrist stays neutral, forearm stays stable'] }
    ],
    cues: ['“Squeeze from the hand, not the wrist” — fingers and palm do the work', '“Full range of motion” — close the gripper completely', '“Controlled release” — don’t let it spring back', '“Steady arm” — the arm stays at 90° and doesn’t move'],
    mistake: 'The wrist bending or twisting during the squeeze.',
    dose: 'Same ladder, per hand. Session 1: 5 kg, 5 reps, +1 per session through session 16. Session 17: 7.5 kg, restart at 5. Cycle to 60 kg.'
  },
  {
    day: 'Upper 1', name: 'Dumbbell Floor Press', equipment: '30–40 lb each · no bench',
    phases: [
      { title: 'Setup', lines: ['Lie flat on your back, knees bent, feet flat on the floor', 'Dumbbells at shoulder height, palms facing forward', 'Elbows resting on the floor, slightly below shoulder level', 'Upper back and head in contact with the floor'] },
      { title: 'The press', lines: ['Press up and slightly inward in an arc', 'Exhale as you press', 'Extend fully without locking the elbows', 'The dumbbells nearly touch at the top'] },
      { title: 'The lower', lines: ['Inhale as you lower along the same arcing path', 'The elbows touch down on the floor — that is the bottom of the rep', 'Pause a beat on the floor before the next press', 'Back and head stay down throughout'] }
    ],
    cues: ['“The floor is the bottom” — the elbow touch sets the depth for you, every rep the same', '“Arc, don’t stack” — press up and in, not straight up', '“Elbows at 45” — don’t let them flare to the sides', '“Pause on the touch” — kills the bounce and makes the set honest'],
    mistake: 'Pressing straight up instead of in a slight arc, or flaring the elbows wide.',
    dose: '10–12 reps, 3 sets, 45 sec rest.',
    why: 'The floor press is not a downgrade. It shortens the range of motion at the bottom, which takes stress off the shoulder joint, and it removes the leg drive you would get on a bench so the chest and triceps do the work. It is the prescribed movement, not a substitute for one.'
  },
  {
    day: 'Upper 1', name: 'Dumbbell Floor Chest Fly', equipment: 'Bowflex dumbbells, 12.5 lb each to start. Far lighter than your press weight — the fly is a stretch movement, not a strength movement.',
    phases: [
      { title: 'Setup', lines: ['Lie on your back, knees bent, feet flat on the floor', 'Hold the dumbbells above your chest, arms nearly straight', 'Set a slight bend in the elbows and hold that bend for the whole set', 'Shoulders pulled down away from your ears'] },
      { title: 'The fly', lines: ['Lower out to the sides in a wide arc', 'Inhale as you descend', 'Stop level with your chest or just below, where you feel the stretch across the front', 'The elbow bend never changes — it is a fixed angle, not a press'] },
      { title: 'The return', lines: ['Drive back up and together along the same arc', 'Exhale as you close', 'Squeeze the chest at the top', 'Control the whole way; no swinging into the next rep'] }
    ],
    cues: ['“Fixed elbows” — set the bend at the start, keep it the entire set', '“Wide arc, not a press” — if the elbows are straightening, it has become a press', '“Stretch, not depth” — go to the stretch, not to the floor', '“Light weight” — this movement punishes ego with shoulder pain'],
    mistake: 'Locking the elbows straight, or bouncing the dumbbell at the bottom.',
    dose: '12–15 reps, 3 sets, 45 sec rest.',
    why: 'The kettlebell handle is a single loadable bell. A fly needs the hands to travel apart in a wide arc, which two implements can do and one cannot — one bell held in both hands is a pullover, a different movement working different muscle. The Bowflex pair is the right tool and always was; the kettlebell version came from a wrong note about the equipment on hand.'
  },
  {
    day: 'Upper 1', name: 'Dumbbell Rows', equipment: '30–35 lb each',
    phases: [
      { title: 'Setup', lines: ['Hinge forward at the hips, torso nearly parallel to the floor', 'Knees slightly bent', 'Dumbbells hang straight down, wrists neutral', 'Back flat, not rounded', 'Shoulders packed — retracted slightly'] },
      { title: 'The pull', lines: ['Drive the elbows back and up toward the ribs', 'Lead with the elbows, not the hands', 'Squeeze the shoulder blades together at the top', 'The dumbbells rise to rib-cage level', 'Exhale as you pull'] },
      { title: 'The lower', lines: ['Inhale as you lower with control', 'Return to full extension — straight but not locked', 'Slow lowering phase', 'Maintain the flat back throughout'] }
    ],
    cues: ['“Hinge from hips, not waist” — maintain a flat back', '“Lead with elbows” — the elbows drive the movement', '“Full extension at bottom” — straight arms, not locked', '“Squeeze at top” — shoulder blades together'],
    mistake: 'Rounding the back, or moving at the waist instead of the hips.',
    dose: '10–12 reps each side, 3 sets, 45 sec rest.'
  },
  {
    day: 'Upper 1', name: 'Dumbbell Shoulder Press', equipment: '25–30 lb each',
    phases: [
      { title: 'Setup', lines: ['Standing, feet hip-width apart, or seated against a wall', 'Dumbbells at shoulder height, palms facing forward', 'Elbows slightly below shoulder level', 'Shoulders retracted lightly', 'Core engaged, neutral spine, feet stable'] },
      { title: 'The press', lines: ['Deep breath, brace the core', 'Press upward and slightly inward', 'Exhale as you press', 'Full extension overhead, not locked', 'They may nearly touch at the top'] },
      { title: 'The lower', lines: ['Inhale as you lower with control', 'Follow the same arcing path down', 'Return to shoulder height', 'Slow, controlled descent'] }
    ],
    cues: ['“Slight arc inward” — toward centre, not straight up', '“Elbows below shoulders at start” — protects the shoulder joint', '“No momentum” — controlled press, no bouncing', '“Full range of motion” — press fully overhead'],
    mistake: 'Flaring the elbows too far out — they stay slightly below shoulder level at the start.',
    dose: '10–12 reps, 2 sets, 60 sec rest.'
  },
  {
    day: 'Upper 2', name: 'Dumbbell Bicep Curls', equipment: '20–25 lb each',
    phases: [
      { title: 'Setup', lines: ['Feet shoulder-width apart, knees soft', 'Dumbbells at the sides, palms facing forward', 'Shoulders rolled back and down', 'Core engaged'] },
      { title: 'The curl', lines: ['Exhale as you bend the elbows', 'Curl up toward the shoulders, wrists neutral', 'Halfway up, supinate — twist the pinky toward the face', 'Curl until the dumbbells reach shoulder level', 'Elbow position stays fixed beside the body'] },
      { title: 'The squeeze, then lower', lines: ['Pause briefly at the top, squeeze the biceps hard', 'Inhale and lower with control down the same path', 'Straighten fully at the bottom without locking the elbows'] }
    ],
    cues: ['“Elbows stay at sides” — don’t move them forward for leverage', '“Supinate at halfway” — the pinky twists toward the face', '“Stationary torso” — no swinging or body momentum', '“Controlled lowering” — same speed down as up'],
    mistake: 'Elbows drifting forward, or the body swinging back.',
    dose: '12–15 reps, 3 sets, 45 sec rest.'
  },
  {
    day: 'Upper 2', name: 'Dumbbell Tricep Overhead Extension', equipment: 'Single dumbbell 20–25 lb',
    phases: [
      { title: 'Setup', lines: ['Stand or sit, feet stable, core engaged', 'Hold one dumbbell overhead with both hands', 'Dumbbell behind the head at the upper back', 'Elbows bent to 90°, close together, pointing forward', 'Shoulders relaxed'] },
      { title: 'The extension', lines: ['Exhale as you straighten the elbows', 'Press upward and slightly forward', 'Full extension overhead, not locked', 'Triceps squeeze at the top'] },
      { title: 'The lower', lines: ['Inhale as you lower with control', 'The dumbbell returns behind the head', 'Elbows stay close and pointing forward', 'Slow lowering phase back to 90°'] }
    ],
    cues: ['“Elbows stay close” — don’t let them flare out', '“Controlled descent” — lower slowly, don’t drop the weight', '“Full range of motion” — touch the upper back, full extension at the top', '“Stationary upper arms” — only the forearms move'],
    mistake: 'Elbows flaring out, or too much movement at the shoulders.',
    dose: '12–15 reps, 3 sets, 45 sec rest.'
  },
  {
    day: 'Lower 1', name: 'Dumbbell Goblet Squats', equipment: 'Single dumbbell 35–40 lb',
    phases: [
      { title: 'Setup', lines: ['Feet shoulder-width apart, toes slightly outward', 'Dumbbell at the chest in both hands, close to the body', 'Chest upright, core engaged, shoulders back and down', 'Weight balanced in the heels, knees tracking over the toes'] },
      { title: 'The descent', lines: ['Inhale as you begin', 'Bend at the knees and hips at the same time', 'The dumbbell stays close to the chest throughout', 'Lower until the thighs are parallel or below', 'Knees track over the toes, don’t cave inward', 'Chest stays upright, weight in the heels'] },
      { title: 'The ascent', lines: ['Exhale as you press through the heels', 'Drive the hips forward and straighten the legs', 'Return to standing, dumbbell still at the chest', 'Chest stays proud throughout'] }
    ],
    cues: ['“Dumbbell at chest” — keeps the load in front, counterbalances, protects the spine', '“Knees over toes” — don’t let them cave inward', '“Full depth” — squat deep with control', '“Chest upright” — don’t lean forward excessively', '“Weight in heels” — don’t let it shift to the toes'],
    mistake: 'Knees caving inward, or the chest rounding forward.',
    dose: '15–20 reps, 3 sets, 60 sec rest.'
  },
  {
    day: 'Lower 1 & B', name: 'Dumbbell Romanian Deadlift', equipment: '35–40 lb each',
    phases: [
      { title: 'Setup', lines: ['Stand upright, feet shoulder-width apart', 'Dumbbells at the sides, wrists neutral', 'Shoulders retracted, chest proud', 'Core engaged, neutral spine', 'Slight bend in the knees — maintain it throughout'] },
      { title: 'The hinge', lines: ['Push the hips backward, spine neutral', 'The dumbbells travel down the front of the thighs', 'Lower to mid-shin level', 'Feel the stretch in the hamstrings', 'Back stays flat; knees stay slightly bent'] },
      { title: 'The return', lines: ['Drive the hips forward explosively', 'The dumbbells travel up the front of the legs', 'Squeeze the glutes at the top', 'Full upright posture at the top'] }
    ],
    cues: ['“Hip hinge, not squat” — knees stay slightly bent, the movement is hip-driven', '“Neutral spine” — flat back, no rounding at the lower back', '“Feel the stretch” — hamstrings at the bottom', '“Dumbbells close to body” — follow the line of the legs', '“Hip drive” — power from glutes and hamstrings, not the arms'],
    mistake: 'Knees straightening, or the back rounding.',
    dose: '12–15 reps, 3 sets, 60 sec rest.'
  },
  {
    day: 'Lower 1', name: 'Split Squats', equipment: '20–30 lb each · no box, no bench',
    phases: [
      { title: 'Setup', lines: ['Stand holding dumbbells at your sides', 'Step one foot forward into a long stride', 'Back heel lifted, weight on the ball of the back foot', 'Torso upright, chest proud, core braced'] },
      { title: 'The descent', lines: ['Drop straight down, not forward', 'Both knees bend together', 'Inhale as you lower', 'Descend until the back knee nearly touches the floor', 'Front knee tracks over the ankle, not past the toes'] },
      { title: 'The drive', lines: ['Push through the front heel to stand', 'Exhale as you drive up', 'Keep the torso upright the whole way — no leaning forward to help', 'Complete all reps on one leg, then switch'] }
    ],
    cues: ['“Straight down, not forward” — the movement is vertical', '“Front heel drives” — push the floor away with the heel, not the toes', '“Back knee kisses the floor” — that is your depth marker, every rep the same', '“Upright torso” — leaning forward turns it into a bad lunge'],
    mistake: 'Drifting the front knee past the toes, or leaning forward to make the drive easier.',
    dose: '10–12 reps each leg, 3 sets, 60 sec rest.',
    why: 'Step-ups need a knee-height box, which you do not have. Split squats hit the same unilateral quad and glute work with both feet on the floor, and they are easier to load and to progress. This is the prescribed movement, not a fallback.'
  },
  {
    day: 'Lower 1 & B', name: 'Dumbbell Lateral Lunges', equipment: '25–35 lb each',
    phases: [
      { title: 'Setup', lines: ['Stand with the feet together', 'Dumbbells at the sides or in front of the chest', 'Upright posture, core engaged', 'Shoulders back and down'] },
      { title: 'The lunge', lines: ['Take a large step laterally with the right leg', 'Shift the weight onto the right leg', 'Bend the right knee, lower the hips toward the ground', 'The left leg stays relatively straight', 'Right knee tracks over the toes; torso stays upright'] },
      { title: 'The return', lines: ['Push off through the right heel', 'Return to the start with the feet together', 'Shift the weight back to centre', 'Inner thigh and glutes drive the return'] }
    ],
    cues: ['“Step laterally” — directly to the side, not forward or back', '“Bend the stepping leg” — load the leg you step with', '“Upright torso” — don’t lean forward or let the chest drop', '“Knee over toes” — the stepping knee tracks over the toes', '“Full range of motion” — as deep as you can control'],
    mistake: 'Stepping at an angle instead of directly sideways.',
    dose: '12 reps each side, 3 sets, 60 sec rest.'
  },
  {
    day: 'Lower 2', name: 'Dumbbell Single-Leg Deadlift', equipment: '20–30 lb each',
    phases: [
      { title: 'Setup', lines: ['Stand on the right leg with a slight knee bend', 'Dumbbells at the sides', 'Left leg free, ready to extend for balance', 'Upright posture, core engaged, chest proud'] },
      { title: 'The hinge', lines: ['Hinge forward at the right hip', 'The left leg extends behind as a counterbalance', 'The dumbbells lower along the right leg', 'Lower to a comfortable depth — parallel if possible', 'Right knee stays slightly bent; back stays neutral'] },
      { title: 'The return', lines: ['Drive through the right heel', 'Return to standing, left leg back to neutral', 'Squeeze the right glute at the top', 'Full upright posture'] }
    ],
    cues: ['“Hip hinge” — the movement is at the hip, not the knee', '“Counterbalance leg” — the free leg extends back for balance', '“Neutral spine” — flat back, no rounding', '“Single-leg stability” — it controls the movement and challenges balance', '“Full range of motion” — as deep as balance allows'],
    mistake: 'Rounding the back, collapsing through the hip, or excessive forward lean.',
    dose: '10–12 reps each leg, 3 sets, 60 sec rest.'
  }
];

  F.guideMoves = MOVES;
})(window.FITNESS);
