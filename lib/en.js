i18n.map('en', {
  "lb": {
    "sign-in": "Sign In",
    "sign-up": "Create",
    "cancel": "Cancel",

    "username-or-email": "Username Or Email",
    "username": "Username",
    "email": "Email",
    "password": "Password",
  }
})

Meteor.startup(function () {
  i18n.setDefaultLanguage('en');
});