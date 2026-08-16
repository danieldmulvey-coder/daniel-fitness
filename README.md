# Daniel fitness

Phone-first workout hub, tracker, movement guide, form guides, and printable sheets.

Same nine pages as [the live GitHub Pages site](https://danieldmulvey-coder.github.io/daniel-fitness/index.html), rebuilt so they can be edited here. No bundler. Data lives in `data/`. Shared CSS in `css/`. Tracker state is still `localStorage` on this device, with the original keys.

## Open locally

```bash
python3 -m http.server 8080
# http://127.0.0.1:8080/
```

`file://` also works (classic script tags, no fetch).

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Today's offer, by device clock |
| `tracker.html` | Strength, ladders, yoga, cardio, stretch |
| `movements.html` | 54 movements |
| `guide-*.html` | Form guides |
| `sheets-workouts.html` | Printable strength / ladder sheets |
| `sheets-optional.html` | Printable optional sessions |

See `CLAUDE.md` for standing decisions and which file to edit.
