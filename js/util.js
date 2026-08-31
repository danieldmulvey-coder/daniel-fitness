window.FITNESS = window.FITNESS || {};

FITNESS.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  });
};

FITNESS.slug = function (name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

// Frozen write keys — existing devices keep history under these names.
// Cal aliases are read if present; writes stay on the brad-* keys.
FITNESS.STORE_ALIASES = {
  'brad-tracker-v1': ['cal-tracker-v1'],
  'cal-tracker-v1': ['brad-tracker-v1'],
  'brad-ladder-session': ['cal-ladder-session'],
  'cal-ladder-session': ['brad-ladder-session'],
  'brad-tracker-last': ['cal-tracker-last'],
  'cal-tracker-last': ['brad-tracker-last'],
  'brad-tracker-sound': ['cal-tracker-sound'],
  'cal-tracker-sound': ['brad-tracker-sound']
};

function storeCandidates(key) {
  var list = [key];
  var extra = FITNESS.STORE_ALIASES[key] || [];
  for (var i = 0; i < extra.length; i++) list.push(extra[i]);
  return list;
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
      var keys = storeCandidates(key);
      for (var i = 0; i < keys.length; i++) {
        var raw = window.localStorage.getItem(keys[i]);
        if (raw != null) return raw;
      }
      return null;
    } catch (e) {
      return null;
    }
  },
  set: function (key, value) {
    try {
      if (typeof value === 'string') window.localStorage.setItem(key, value);
      else window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }
};
