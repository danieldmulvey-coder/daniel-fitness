window.FITNESS = window.FITNESS || {};

FITNESS.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  });
};

FITNESS.slug = function (name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

FITNESS.store = {
  get: function (key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  getRaw: function (key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  },
  set: function (key, value) {
    try {
      if (typeof value === 'string') window.localStorage.setItem(key, value);
      else window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }
};
