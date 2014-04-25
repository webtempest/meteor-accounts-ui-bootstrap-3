Utils = {
  namespace: "login-buttons",

  setVar: function (key, val) {
    return Session.set(this.namespace + "." + key, val);
  },

  getVar: function (key) {
    return Session.get(this.namespace + "." + key);
  },

  formToHash: function ($form) {
    var hash = {};

    _.each($form.serializeArray(), function (field) {
      hash[field.name] = field.value;
    });

    return hash;
  }
}