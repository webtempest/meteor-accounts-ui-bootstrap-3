Package.describe({
	summary: 'Bootstrap-styled version of login widgets.',
	version: '1.0.5',
	git: "https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3",
});

Package.on_use(function (api) {
	api.use(['session@1.0.0', 'handlebars@1.0.0', 'stylus@1.0.0', 'accounts-base@1.0.0', 'underscore@1.0.0', 'templating@1.0.0'], 'client');

	api.add_files([
		'accounts_ui.js',

		'login_buttons.html',
		'login_buttons_single.html',
		'login_buttons_dropdown.html',
		'login_buttons_dialogs.html',

		'login_buttons_session.js',

		'login_buttons.js',
		'login_buttons_single.js',
		'login_buttons_dropdown.js',
		'login_buttons_dialogs.js',
		'accounts_ui.styl'], 'client');
});