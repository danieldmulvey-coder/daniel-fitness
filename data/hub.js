window.FITNESS = window.FITNESS || {};
(function (F) {

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// What each day puts on offer. Presentation only — no target, no progression,
// nothing here touches a session count.
const YOGA = { href: 'tracker.html#yoga', kicker: 'Optional', title: 'Morning yoga flow', body: 'Ten minutes. Hold time steps up by session.' };
const STRETCH = { href: 'tracker.html#stretch', kicker: 'Optional', title: 'Daily stretch', body: 'Ten minutes, unchanged forever. Done or not done.' };
const CARDIO = { href: 'tracker.html#cardio', kicker: 'Optional', title: 'Cardio', body: 'Pick Cardio A (intervals) or Cardio B (steady + flow).' };
const OFFER = {
  Monday: [YOGA, STRETCH, { href: 'tracker.html#mw', kicker: 'Main session', title: 'Ladders', body: 'Kettlebell swings with the gripper laddering during the rests.', main: true, ladder: true }],
  Tuesday: [YOGA, STRETCH,
    { href: 'tracker.html#ua', kicker: 'Main session', title: 'Upper 1', body: 'Chest, back, shoulders. 30 min.', main: true },
    { href: 'tracker.html#ub', kicker: 'Optional', title: 'Upper 2', body: 'Arms, bands, accessories. 30 min.' }],
  Wednesday: [YOGA, STRETCH, { href: 'tracker.html#mw', kicker: 'Main session', title: 'Ladders', body: 'Kettlebell swings with the gripper laddering during the rests.', main: true, ladder: true }],
  Thursday: [YOGA, STRETCH,
    { href: 'tracker.html#la', kicker: 'Main session', title: 'Lower 1', body: 'Quads, glutes, posterior chain. 30 min.', main: true },
    { href: 'tracker.html#lb', kicker: 'Optional', title: 'Lower 2', body: 'Hip drive, core, leg finisher. 30 min.' }],
  Friday: [YOGA, STRETCH, CARDIO],
  Saturday: [YOGA, STRETCH, CARDIO],
  Sunday: [YOGA, STRETCH, CARDIO]
};
const NOTES = {
  Thursday: 'Lower 1 and Lower 2 overlap — the RDL and the lateral lunges appear in both. Run them back to back and you skip D on Lower 2 and E on Lower 1.'
};

  F.days = DAYS;
  F.offer = OFFER;
  F.notes = NOTES;
  F.guides = [
    { href: 'guide-strength.html', title: 'Strength Compound', slots: '13 movements' },
    { href: 'guide-bands.html', title: 'Bands & Bodyweight', slots: '8 movements' },
    { href: 'guide-cardio.html', title: 'Cardio', slots: '11 movements' },
    { href: 'guide-yoga.html', title: 'Yoga & Stretching', slots: '21 movements' }
  ];
  F.sheets = [
    { href: 'sheets-workouts.html', title: 'Workout Sheets', pages: '10 pages' },
    { href: 'sheets-optional.html', title: 'Optional Sessions', pages: '7 pages' }
  ];
})(window.FITNESS);
