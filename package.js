Package.describe({
  summary: "Bootstrap-3 styled accounts-ui"
});

Package.on_use(function (api) {
  api.use(['deps', 'jquery', 'service-configuration', 'accounts-base',
           'underscore', 'templating', 'session', 'less'], 'client');
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  // Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
  // services.
  api.use('accounts-oauth', {weak: true});

  // Allow us to directly test if accounts-password (which doesn't use
  // Accounts.oauth.registerService) exists.
  api.use('accounts-password', {weak: true});


  api.use('just-i18n', 'client');

  api.add_files([
    "lib/utils.js",
    "lib/accounts-ui.js",
    "lib/en.js",
    'lib/login-buttons.html',
    'lib/login-buttons.js',
    'lib/form.js',
    'lib/dropdown.less',
  ], 'client');
});

Package.on_test(function (api) {
  api.use('accounts-ui-bootstrap-3');
  api.use('tinytest');
});
