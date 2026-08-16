window.FITNESS = window.FITNESS || {};
(function (F) {

const GROUPS = [
  {
    "label": "Strength — dumbbell and kettlebell",
    "moves": [
      {
        "name": "Kettlebell Swing",
        "steps": [
          "Stand with feet shoulder-width apart, kettlebell on the ground between your feet.",
          "Hinge at the hips to grip the handle with both hands, keeping your back neutral and shoulders retracted.",
          "Drive your hips backward explosively, letting the kettlebell swing to chest height naturally from the hip drive.",
          "At the peak of the swing, your arms are relaxed and extended, with the kettlebell at shoulder height.",
          "Let the kettlebell fall under gravity between your legs, guiding it with soft knees.",
          "Prepare for the next swing by pushing your hips back again — one continuous fluid motion."
        ],
        "watchFor": "Turning it into a squat by bending your knees too much. Movement is at the hips, not the knees.",
        "note": "For the hamstring-focused version (replaces the band hamstring curl), use a heavier bell than your chest-press weight and pause a beat at the bottom of the backswing.",
        "read": "https://www.strengthlog.com/kettlebell-swing/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Floor Chest Fly",
        "steps": [
          "Lie on your back on the floor with knees bent and feet flat.",
          "Hold a dumbbell in each hand above your chest, arms nearly straight, with a slight bend in the elbows.",
          "Lower the dumbbells out to the sides in a wide arc, holding that same elbow bend.",
          "Stop when your upper arms reach the floor and you feel the stretch across your chest.",
          "Drive the dumbbells back up and together along the same arc, squeezing your chest at the top."
        ],
        "watchFor": "Straightening the elbows into a press. The elbow angle is set at the start and never changes.",
        "note": "Two dumbbells, not the kettlebell. The hands must travel apart, which one bell cannot do. Start at 12.5 lb per hand — roughly a third of your floor press.",
        "read": "https://www.strengthlog.com/dumbbell-chest-fly/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Romanian Deadlift",
        "steps": [
          "Stand upright holding a dumbbell in each hand in front of your thighs, feet hip-width apart.",
          "Soften your knees slightly and hold them there throughout — they don't bend further.",
          "Push your hips backward while maintaining a neutral spine, letting the dumbbells travel down your legs.",
          "Lower until you reach mid-shin or until your lower back would begin to round.",
          "Drive your hips forward explosively to stand upright, squeezing your glutes at the top.",
          "Return to the starting position and repeat."
        ],
        "watchFor": "Rounding your lower back or turning it into a squat by bending your knees too much.",
        "note": "A kettlebell held in both hands works identically and is the substitute for the band pull-through, which needed a low anchor.",
        "read": "https://www.strengthlog.com/dumbbell-romanian-deadlift/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Single-Leg Deadlift",
        "steps": [
          "Stand on your right leg with a slight knee bend, holding dumbbells at your sides.",
          "Hinge forward at the right hip, extending your left leg behind you for counterbalance.",
          "Lower the dumbbells toward the ground along your right leg, keeping your right knee slightly bent.",
          "Lower until your torso is parallel to the ground or to the depth you can control.",
          "Drive through your right heel to return to standing, bringing your left leg back to neutral.",
          "Squeeze your right glute at the top and reset for the next rep."
        ],
        "watchFor": "Rounding your back, allowing your hip to collapse, or rotating your torso.",
        "read": "https://www.strengthlog.com/single-leg-deadlift/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Goblet Squat",
        "steps": [
          "Stand with feet shoulder-width apart, toes pointing slightly outward.",
          "Hold a single dumbbell at chest height with both hands, close to your body.",
          "Lower into a squat by bending at both knees and hips simultaneously, keeping your chest upright.",
          "Descend until your thighs are parallel to the ground or lower, maintaining weight in your heels.",
          "Drive through your heels to stand up, keeping the dumbbell at chest height throughout.",
          "Straighten your legs fully and return to standing."
        ],
        "watchFor": "Knees caving inward or chest rounding forward. Keep knees tracking over toes and chest proud.",
        "read": "https://www.strengthlog.com/goblet-squat/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Floor Press",
        "steps": [
          "Lie flat on your back with knees bent and feet flat on the floor.",
          "Hold dumbbells at shoulder height with palms facing forward, elbows slightly below shoulder level.",
          "Press the dumbbells upward and slightly inward in a controlled arc.",
          "Extend your arms fully overhead (but don't lock your elbows) until the dumbbells nearly touch at the top.",
          "Lower the dumbbells back to shoulder height with control, following the same arcing path.",
          "Your upper back and head stay in contact with the floor throughout."
        ],
        "watchFor": "Elbows flaring too far out or pressing straight up instead of in a slight arc.",
        "read": "https://www.strengthlog.com/dumbbell-floor-press/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Rows",
        "steps": [
          "Hinge forward, torso nearly parallel to floor.",
          "Knees slightly bent, dumbbells hanging straight, neutral wrists.",
          "Back flat, shoulders retracted.",
          "Drive elbows back and up toward ribs.",
          "Squeeze shoulder blades at top.",
          "Lower with control to full extension."
        ],
        "watchFor": "Rounding back or moving at waist.",
        "read": "https://www.strengthlog.com/dumbbell-row/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Shoulder Press",
        "steps": [
          "Stand with feet hip-width apart or sit with back support.",
          "Hold dumbbells at shoulder height, palms forward.",
          "Elbows slightly below shoulders at start.",
          "Press upward and inward in controlled arc.",
          "Extend fully overhead (no lock).",
          "Lower to shoulder height with control."
        ],
        "watchFor": "Flaring elbows or using momentum.",
        "read": "https://www.strengthlog.com/dumbbell-shoulder-press/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Bicep Curls",
        "steps": [
          "Stand feet shoulder-width, knees soft, dumbbells at sides, palms forward.",
          "Shoulders retracted, core engaged.",
          "Bend elbows, curl toward shoulders.",
          "Wrists neutral, elbows pinned to sides.",
          "Halfway up, supinate hands (pinkies toward face).",
          "Lower with control to full extension."
        ],
        "watchFor": "Elbows moving forward or body swinging.",
        "read": "https://www.strengthlog.com/dumbbell-curl/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Dumbbell Tricep Overhead Extension",
        "steps": [
          "Stand or sit holding single dumbbell overhead with both hands.",
          "Position behind head, elbows bent at 90 degrees.",
          "Elbows close, pointing forward.",
          "Straighten elbows to press upward and forward.",
          "Extend fully (no lock).",
          "Lower behind head with control."
        ],
        "watchFor": "Elbows flaring or shoulder movement."
      },
      {
        "name": "Dumbbell Lateral Lunges",
        "steps": [
          "Stand upright feet together, dumbbells at sides or at chest.",
          "Large step directly to right.",
          "Shift weight to right, bend knee.",
          "Lower hips until right knee at 90 degrees.",
          "Torso upright, left leg straight.",
          "Push off right heel to return."
        ],
        "watchFor": "Stepping at angle or forward lean."
      },
      {
        "name": "Split Squats",
        "steps": [
          "Stand holding dumbbells at sides.",
          "Step forward with right leg.",
          "Lower hips by bending both knees until back knee nearly touches floor.",
          "Right knee over ankle, torso upright.",
          "Push through right heel to return.",
          "Repeat on same leg, then switch."
        ],
        "watchFor": "Front knee past toes or forward lean."
      },
      {
        "name": "Hand Gripper Squeeze",
        "steps": [
          "Dial the gripper to today's resistance setting before your first rep.",
          "Hold it in one hand with the handles across your palm and the pads of your fingers, not the fingertips.",
          "Squeeze until the handles touch, keeping your wrist straight.",
          "Hold the closed position for a beat.",
          "Open your hand slowly under control — the release is half the work.",
          "Complete the set, then switch hands."
        ],
        "watchFor": "Letting the gripper snap open. The slow release is where the forearm strength is built.",
        "note": "Ladder format on Monday and Wednesday, pyramiding up and back down alongside the kettlebell swings. Never trade form for speed."
      }
    ]
  },
  {
    "label": "Bands and bodyweight",
    "moves": [
      {
        "name": "Band Pallof Press",
        "steps": [
          "Anchor a resistance band at chest height on a door frame.",
          "Stand perpendicular to the anchor point with feet shoulder-width apart and slight knee bend.",
          "Hold the band end with both hands at chest level, creating rotational tension.",
          "Press the band straight forward away from your chest, resisting the rotational force.",
          "Keep your torso facing forward and shoulders aligned throughout — fight the twist.",
          "Slowly return the band to chest level and repeat."
        ],
        "watchFor": "Allowing your torso to rotate toward the band or leaning backward.",
        "read": "https://www.strengthlog.com/pallof-press/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Band Face Pulls",
        "steps": [
          "Anchor band at eye height on door frame.",
          "Step back until medium tension, arms extended.",
          "Elbows high, aligned with shoulders.",
          "Pull band toward face, drive elbows back.",
          "Squeeze shoulder blades at end.",
          "Slowly return arms extended."
        ],
        "watchFor": "Elbows dropping or head moving to band.",
        "read": "https://www.strengthlog.com/banded-face-pull/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Band Lateral Raises",
        "steps": [
          "Stand on band both feet, feet shoulder-width apart.",
          "Hold ends at sides, slight elbow bend.",
          "Raise arms out to sides until parallel to ground.",
          "Maintain elbow bend throughout.",
          "Feel shoulder contraction at top.",
          "Lower with control to sides."
        ],
        "watchFor": "Locked elbows or raising past shoulder level.",
        "read": "https://www.strengthlog.com/resistance-band-lateral-raise/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Band Bicep Curls",
        "steps": [
          "Stand on band both feet, hip-width apart.",
          "Hold ends with palms forward.",
          "Bend elbows, curl hands toward shoulders.",
          "Elbows stationary at sides.",
          "Maintain slight elbow bend at bottom.",
          "Lower with control."
        ],
        "watchFor": "Elbows moving forward or body swinging.",
        "read": "https://www.strengthlog.com/resistance-band-curl/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Band Tricep Pushdown",
        "steps": [
          "Anchor band high on door frame.",
          "Stand at arm's length, back to anchor.",
          "Hold handles together or apart, elbows bent 90 degrees.",
          "Elbows close to body throughout.",
          "Straighten elbows to press downward.",
          "Return to bent position with control."
        ],
        "watchFor": "Elbows flaring or moving away."
      },
      {
        "name": "Band Lateral Walk",
        "steps": [
          "Loop band around legs (above knees or at ankles).",
          "Stand hip-width apart, slight knee bend.",
          "Maintain quarter-squat throughout.",
          "Step laterally with right leg.",
          "Bring left foot to meet right.",
          "Continue for target steps, then reverse direction."
        ],
        "watchFor": "Standing upright or small steps."
      },
      {
        "name": "Plank Hold",
        "steps": [
          "Forearm plank, forearms on ground.",
          "Shoulders over elbows.",
          "Straight line from head to heels.",
          "Core engaged, glutes squeezed.",
          "Maintain steady breathing.",
          "Hold without hips sagging or piking."
        ],
        "watchFor": "Hips sagging or glutes piking.",
        "read": "https://www.strengthlog.com/plank/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Side Plank Hold",
        "steps": [
          "Lie on right side, support on right forearm.",
          "Elbow under shoulder.",
          "Stack or stagger feet.",
          "Extend left arm to ceiling or rest on hip.",
          "Straight line from head to feet.",
          "Hold without sagging or rotating."
        ],
        "watchFor": "Hips sagging or rotating.",
        "read": "https://www.strengthlog.com/side-plank/",
        "readSource": "StrengthLog"
      },
      {
        "name": "Push-ups",
        "steps": [
          "Plank position, hands under shoulders, slightly wider than shoulder-width.",
          "Straight line head to heels.",
          "Lower body by bending elbows at 45 degrees.",
          "Descend until chest nearly touches ground.",
          "Push through palms to extend arms.",
          "Maintain straight body line throughout."
        ],
        "watchFor": "Sagging hips, flared elbows, insufficient depth.",
        "read": "https://www.strengthlog.com/push-up/",
        "readSource": "StrengthLog"
      }
    ]
  },
  {
    "label": "Cardio",
    "moves": [
      {
        "name": "Burpees",
        "steps": [
          "Stand upright feet hip-width, arms at sides.",
          "Lower to squat, hands on ground.",
          "Jump or step feet back to plank.",
          "Push-up (optional for modification).",
          "Jump feet forward to squat.",
          "Explode upward with arms overhead."
        ],
        "watchFor": "Losing control or plank sag."
      },
      {
        "name": "Mountain Climbers",
        "steps": [
          "Start in plank, hands under shoulders.",
          "Straight line head to heels.",
          "Drive right knee toward chest, controlled.",
          "Return right foot.",
          "Drive left knee toward chest.",
          "Continue alternating at steady or rapid pace."
        ],
        "watchFor": "Hips sagging or torso rotation."
      },
      {
        "name": "Jumping Jacks",
        "steps": [
          "Stand upright feet together, arms at sides.",
          "Jump upward, spread feet wider than hip-width.",
          "Raise arms to sides or overhead.",
          "Land softly with bent knees.",
          "Jump to return feet together, lower arms.",
          "Maintain upright posture and steady rhythm."
        ],
        "watchFor": "Minimal arm swing or small foot spread."
      },
      {
        "name": "High Knees",
        "steps": [
          "Stand upright feet hip-width.",
          "Drive right knee toward chest.",
          "Left arm forward, right arm back in running motion.",
          "Lower right foot, drive left knee up.",
          "Continue alternating at rapid pace.",
          "Maintain upright posture."
        ],
        "watchFor": "Knees not high enough or forward lean."
      },
      {
        "name": "Jogs in Place",
        "steps": [
          "Stand upright feet hip-width.",
          "Lift right foot slightly.",
          "Lift left foot off ground.",
          "Arms swing naturally at sides, elbows bent.",
          "Maintain steady, comfortable pace.",
          "Continue alternating in rhythmic motion."
        ],
        "watchFor": "Landing on heels."
      },
      {
        "name": "Side-Shuffle Steps",
        "steps": [
          "Stand upright hip-width apart, athletic stance.",
          "Step right foot to the right.",
          "Bring left foot to meet right.",
          "Continue moving laterally right.",
          "Reverse direction and shuffle left.",
          "Maintain steady pace and athletic posture."
        ],
        "watchFor": "Jerky movement or small steps."
      },
      {
        "name": "Lunges",
        "steps": [
          "Stand upright feet hip-width, hands on hips or chest.",
          "Step forward with right leg.",
          "Lower hips by bending both knees until right knee at 90 degrees.",
          "Right knee over ankle, torso upright.",
          "Push through right heel to return standing.",
          "Step forward with left leg and repeat."
        ],
        "watchFor": "Front knee past toes or forward lean."
      }
    ]
  },
  {
    "label": "Yoga and stretching",
    "moves": [
      {
        "name": "90/90 Hip Flexor Stretch",
        "steps": [
          "Lie on your right side with your right knee bent at 90 degrees in front of your body.",
          "Bend your left knee at 90 degrees, positioning your left leg behind your body.",
          "Fold your torso forward over your right leg until you feel a deep stretch in your hip flexors and glute.",
          "Keep your hips level and don't let your pelvis rotate.",
          "Breathe deeply and relax into the stretch for 45 seconds.",
          "Return to neutral and switch sides, repeating on the left side."
        ],
        "watchFor": "Letting your top hip rotate backward or allowing your lower back to round."
      },
      {
        "name": "Warrior I to Warrior II Flow",
        "steps": [
          "Start in Warrior I, right leg forward, left extended back.",
          "Ground feet, bend right knee to 90 degrees.",
          "Rotate torso to open into Warrior II, hips perpendicular.",
          "Both legs engaged with slight bend.",
          "Rotate torso back to Warrior I.",
          "Flow smoothly synchronized with breath."
        ],
        "watchFor": "Jerky transitions or hip sinking."
      },
      {
        "name": "Standing Balance Work",
        "steps": [
          "Stand on right leg, slight knee bend.",
          "Engage core for balance.",
          "Single-leg: lift left foot slightly and hold.",
          "Figure-4: place left ankle on right thigh.",
          "Steady gaze on fixed point.",
          "Hold for target time, switch legs."
        ],
        "watchFor": "Excessive lean or loss of balance."
      },
      {
        "name": "Child's Pose",
        "steps": [
          "Hands and knees, tabletop position.",
          "Widen knees to hip-width or wider.",
          "Sink hips back toward heels.",
          "Fold torso forward, forehead to ground.",
          "Arms at sides or extended forward.",
          "Breathe deeply and relax completely."
        ],
        "watchFor": "Forcing the fold or neck pressure."
      },
      {
        "name": "Cat-Cow Stretch",
        "steps": [
          "Tabletop position on hands and knees.",
          "Cow: drop belly, lift chest, gaze up, inhale.",
          "Exhale and transition to cat by rounding spine.",
          "Tuck chin toward chest, round back.",
          "Flow smoothly between poses.",
          "Match breath to movement."
        ],
        "watchFor": "Jerky transitions."
      },
      {
        "name": "Downward-Facing Dog",
        "steps": [
          "Plank position, hands under shoulders.",
          "Press hands firmly, spread fingers wide.",
          "Lift hips up and back to inverted V-shape.",
          "Head between arms, neutral position.",
          "Shoulder blades down back, away from ears.",
          "Work heels toward ground (may not touch)."
        ],
        "watchFor": "Head drooping or shoulder elevation."
      },
      {
        "name": "Low Lunge",
        "steps": [
          "From downward dog, step right foot between hands.",
          "Lower left knee toward ground.",
          "Square hips toward forward direction.",
          "Sink hips forward and downward.",
          "Right knee stacked over ankle.",
          "Breathe into hip flexor and quad stretch."
        ],
        "watchFor": "Right knee drifting forward."
      },
      {
        "name": "Warrior I",
        "steps": [
          "Step right foot forward or pivot from downward dog.",
          "Ground both feet, right knee bent over ankle.",
          "Square hips toward front of mat.",
          "Raise arms overhead, shoulder-width apart.",
          "Reach through fingertips, ground back heel.",
          "Hold and breathe deeply."
        ],
        "watchFor": "Front knee drift or hip rotation."
      },
      {
        "name": "Warrior II",
        "steps": [
          "Step right foot forward, legs shoulder-width apart.",
          "Ground both feet, right knee bent over ankle.",
          "Rotate hips and torso perpendicular to legs.",
          "Extend arms out to sides at shoulder height.",
          "Relax shoulders down.",
          "Gaze forward over front fingertips."
        ],
        "watchFor": "Hips sinking or rotating."
      },
      {
        "name": "Triangle Pose",
        "steps": [
          "Stand feet hip-width or slightly wider.",
          "Straighten both legs, extend arms overhead.",
          "Extend right arm to side, fold from right hip.",
          "Place right hand on shin/block/ground.",
          "Extend left arm toward sky, open chest.",
          "Keep legs straight, gaze forward or up."
        ],
        "watchFor": "Rounded back or forward lean."
      },
      {
        "name": "Seated Spinal Twist",
        "steps": [
          "Sit on ground, both legs extended.",
          "Bend right knee, place right foot outside left thigh.",
          "Inhale to lengthen spine.",
          "Exhale and twist right, use left arm to assist.",
          "Keep chest open, shoulders back.",
          "Hold and breathe deeply."
        ],
        "watchFor": "Forward rounding or aggressive twist."
      },
      {
        "name": "Supine Figure-4 Stretch",
        "steps": [
          "Lie on back, knees bent, feet on floor.",
          "Place right ankle on left thigh (figure-4).",
          "Pull left thigh toward chest.",
          "Keep head and shoulders relaxed.",
          "Breathe deeply and relax.",
          "Hold for target time, switch sides."
        ],
        "watchFor": "Jerking or neck pressure."
      },
      {
        "name": "Supine Spinal Twist",
        "steps": [
          "Lie on back, knees bent, feet on floor.",
          "Drop both knees to right side.",
          "Extend arms in T-position.",
          "Turn head to left or neutral.",
          "Let gravity deepen twist.",
          "Breathe and relax completely."
        ],
        "watchFor": "Forcing the twist or excessive shoulder rotation."
      },
      {
        "name": "Supine Knee-to-Chest",
        "steps": [
          "Lie on your back with both legs extended along the floor.",
          "Draw both knees up toward your chest and clasp your hands around your shins.",
          "Pull gently until you feel a broad stretch across the lower back.",
          "Keep your head and shoulders resting on the floor.",
          "Breathe deeply and let the lower back release for 30 seconds."
        ],
        "watchFor": "Lifting your head toward your knees instead of letting the floor support it."
      },
      {
        "name": "Forward Fold",
        "steps": [
          "Stand feet hip-width or together.",
          "Hinge at hips, fold torso forward.",
          "Let arms hang toward feet or rest on shins.",
          "Relax neck and head completely.",
          "Don't force; go only to comfort level.",
          "Breathe into hamstring and spine stretch."
        ],
        "watchFor": "Excessive lower back rounding."
      },
      {
        "name": "Corpse Pose (Savasana)",
        "steps": [
          "Lie flat on back, legs extended.",
          "Position arms at sides, palms up.",
          "Let feet fall apart naturally.",
          "Close eyes and relax completely.",
          "Release all muscle tension.",
          "Breathe naturally, allow mind to settle."
        ],
        "watchFor": "Holding tension."
      },
      {
        "name": "Neck Circles",
        "steps": [
          "Stand upright feet hip-width apart.",
          "Relax shoulders, body still.",
          "Slowly rotate head full circle clockwise.",
          "Complete 15 seconds of slow circles.",
          "Reverse and rotate counterclockwise 15 seconds.",
          "Move smoothly without forcing."
        ],
        "watchFor": "Forcing or jerky movement."
      },
      {
        "name": "Ear-to-Shoulder Stretch",
        "steps": [
          "Stand upright feet hip-width apart.",
          "Slowly bring right ear toward right shoulder.",
          "Stop at gentle tension (not pain).",
          "Hold 15 seconds, breathe deeply.",
          "Return to center, repeat left side.",
          "Keep shoulders relaxed."
        ],
        "watchFor": "Forcing or breath holding."
      },
      {
        "name": "Doorway Chest Stretch",
        "steps": [
          "Stand in doorway, one arm on frame at shoulder height.",
          "Place forearm on frame, step forward.",
          "Feel stretch across chest and front shoulder.",
          "Keep shoulders back, chest proud.",
          "Hold 30 seconds.",
          "Repeat opposite side."
        ],
        "watchFor": "Shoulder joint stress."
      },
      {
        "name": "Cross-Body Shoulder Stretch",
        "steps": [
          "Stand or sit upright.",
          "Bring right arm across chest.",
          "Use left hand to gently pull right elbow closer.",
          "Feel stretch in rear deltoid and back.",
          "Hold 30 seconds.",
          "Repeat opposite side."
        ],
        "watchFor": "Jerking or excessive pressure."
      },
      {
        "name": "Reverse Shoulder Stretch",
        "steps": [
          "Stand upright feet hip-width apart.",
          "Clasp hands behind back.",
          "Straighten arms, pull toward ground.",
          "Lift chest, feel stretch across front shoulders.",
          "Hold 30 seconds.",
          "Release and repeat if desired."
        ],
        "watchFor": "Rounding upper back or forward lean."
      },
      {
        "name": "Butterfly Stretch",
        "steps": [
          "Sit on ground, bring soles together.",
          "Let knees fall to sides naturally.",
          "Gently press knees toward ground with elbows (no force).",
          "Fold slightly forward if desired.",
          "Breathe and relax into stretch.",
          "Hold 45 seconds."
        ],
        "watchFor": "Forcing knees down or bouncing."
      },
      {
        "name": "Pigeon Pose",
        "steps": [
          "Start in downward dog or tabletop.",
          "Bring right knee forward behind right wrist.",
          "Right shin roughly perpendicular to left leg.",
          "Fold torso forward over right leg.",
          "Keep hips level, no rotation.",
          "Hold 45 seconds, repeat opposite side."
        ],
        "watchFor": "Hip rotation or lower back rounding."
      },
      {
        "name": "Seated Forward Fold",
        "steps": [
          "Sit on ground, both legs extended.",
          "Hinge at hips, fold torso forward.",
          "Reach toward feet or shins as comfortable.",
          "Don't force; go to mild tension only.",
          "Breathe deeply into stretch.",
          "Hold 45 seconds."
        ],
        "watchFor": "Excessive lower back rounding."
      },
      {
        "name": "Standing Calf Stretch",
        "steps": [
          "Face wall or support for balance.",
          "Step right foot forward, left foot back.",
          "Keep left heel grounded firmly.",
          "Lean body forward toward wall to feel stretch.",
          "Hold 30 seconds.",
          "Switch legs and repeat."
        ],
        "watchFor": "Heel lifting off ground."
      }
    ]
  }
];

  F.movementGroups = GROUPS;
})(window.FITNESS);
