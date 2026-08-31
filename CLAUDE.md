# Project notes

## Decision authority
Daniel makes the final call on everything in this project. Cal is Fitness
Architect (Idlewild locked roster 2026-08-31; Brad is folded). Cal decides
when Daniel isn't in the room — but when Daniel is in the room, he decides.

- Do not park a decision "pending Cal" if Daniel can answer it. Ask Daniel.
- When Daniel makes a call that changes Cal's material, apply it and note it as a change
  to tell Cal, so Cal can advise afterwards if he disagrees.
- Movement instructions Cal owns still hold verbatim — but Daniel can overrule any of it.

## Standing decisions
- No photos anywhere in this material.
- One movement dataset feeds all pages; design does layout only. (Sheets still duplicate
  programming today — edit `data/sessions.js` and `data/workouts.js` together.)
- The kettlebell/gripper ladder is counted by session, never by date or calendar week.
- Tracker write keys are `cal-tracker-v1`, `cal-tracker-last`, `cal-ladder-session`,
  `cal-tracker-sound`. On read, if a cal-* key is missing or empty and the matching
  `brad-*` leftover has data, copy it onto cal-* once and leave brad-* in place.
  Do not wipe history.
- No login, no network calls, no analytics. Must work from `file://` and offline.
- Do not add a video link unless it has been fetched and confirmed. 38 movements have no
  Read link on purpose.
- Cardio variant labels must keep the shape `Cardio A · …` / `Cardio B · …` — field keys
  use `variant.slice(7, 8)`.
- Where a guide and a sheet disagree, the guide is Cal's words and wins.

## Edit map
| Change | File |
| --- | --- |
| A movement's steps / watch-for | `data/movements.js` |
| A day's offer on the hub | `data/hub.js` |
| Tracker session / loads / form links / progressions (`OPT`, `ladderAt`) | `data/sessions.js` |
| Printable workout sheets | `data/workouts.js` |
| Optional session sheets | `data/optional.js` |
| Form-guide phases and cues | `data/guide-*.js` |
| Look and layout | `css/organic.css` (tokens), `css/app.css` (pages) |
