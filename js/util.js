window.FITNESS = window.FITNESS || {};

FITNESS.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  });
};

FITNESS.slug = function (name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

// Canonical write keys. Existing devices may still have brad-* leftovers;
// first read copies those onto cal-* and leaves the old values in place.
FITNESS.KEYS = {
  data: 'cal-tracker-v1',
  ladder: 'cal-ladder-session',
  last: 'cal-tracker-last',
  sound: 'cal-tracker-sound'
};

FITNESS.STORE_LEGACY = {
  'cal-tracker-v1': 'brad-tracker-v1',
  'cal-ladder-session': 'brad-ladder-session',
  'cal-tracker-last': 'brad-tracker-last',
  'cal-tracker-sound': 'brad-tracker-sound'
};

function canonicalKey(key) {
  if (FITNESS.STORE_LEGACY[key]) return key;
  var map = FITNESS.STORE_LEGACY;
  for (var cal in map) {
    if (map[cal] === key) return cal;
  }
  return key;
}

function isEmptyRaw(raw) {
  return raw == null || raw === '';
}

function migrateIfNeeded(canonical) {
  try {
    var current = window.localStorage.getItem(canonical);
    if (!isEmptyRaw(current)) return current;
    var legacy = FITNESS.STORE_LEGACY[canonical];
    if (!legacy) return current;
    var old = window.localStorage.getItem(legacy);
    if (isEmptyRaw(old)) return current;
    window.localStorage.setItem(canonical, old);
    return old;
  } catch (e) {
    return null;
  }
}

FITNESS.store = {
  get: function (key, fallback) {
    try {
      var raw = FITNESS.store.getRaw(key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  getRaw: function (key) {
    try {
      return migrateIfNeeded(canonicalKey(key));
    } catch (e) {
      return null;
    }
  },
  set: function (key, value) {
    try {
      var dest = canonicalKey(key);
      if (typeof value === 'string') window.localStorage.setItem(dest, value);
      else window.localStorage.setItem(dest, JSON.stringify(value));
    } catch (e) {}
  }
};
