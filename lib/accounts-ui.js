Accounts.ui = {};

Accounts.ui._options = {
  wrap: "li",
  displayName: function () {
    var user = Meteor.user();
    if (!user)
      return '';

    if (user.profile && user.profile.name)
      return user.profile.name;
    if (user.username)
      return user.username;
    if (user.emails && user.emails[0] && user.emails[0].address)
      return user.emails[0].address;

    return '';
  },

  fields: {
    "login": {
      "username-or-email": {
        required: true
      },
      "password": {
        required: true,
        type: "password"
      }
    },
    "sign-up": {
      "username": {
        required: true
      },
      "email": {
        required: true
      },
      "password": {
        required: true,
        type: "password"
      }
    }
  }
};

Accounts.ui.config = function (options) {
  // we need deep copy
  $.extend(true, Accounts.ui._options, options);
}