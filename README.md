meteor-accounts-ui-bootstrap-3
=====================================

Meteor accounts-ui styled with Twitter's Bootstrap 3, now with multi-language support.

Installation
-------------

With Meteor 0.9:

```sh
$ meteor add ian:bootstrap-3
$ meteor add ian:accounts-ui-bootstrap-3
```

You will also need at least one accounts plugin: `meteor add accounts-password`, `meteor add accounts-github`, etc.

How to use
-------------

Add `{{> loginButtons }}` to your template

Example:

```html
<div class="navbar navbar-default" role="navigation">
	<div class="navbar-header">
		<a class="navbar-brand" href="#">Project name</a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
	</div>
	<div class="navbar-collapse collapse">
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">Link</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			{{> loginButtons }} <!-- here -->
		</ul>
	</div>
</div>
```

Add additional logged in actions
--------------------------------

You can add additional markup to the logged in dropdown, e.g. to edit
the user's account or profile, by defining a 
`_loginButtonsAdditionalLoggedInDropdownActions` template and specifying
the corresponding events.

```html
<template name="_loginButtonsAdditionalLoggedInDropdownActions">
	<button class="btn btn-default btn-block" id="login-buttons-edit-profile">Edit profile</button>
</template>
```

```javascript
Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-edit-profile': function(event) {
		event.stopPropagation();
		Template._loginButtons.toggleDropdown();
		Router.go('profileEdit');
	}
});
```

Localization
-------------

The default language is English, but this package also comes with Spanish translations built in. If you want to change the language to Spanish run the following from the client:

```javascript
accountsUIBootstrap3.setLanguage('es_ES');
```

If you want to implement your own language, use the `map` function like so:

```javascript
accountsUIBootstrap3.map('es_ES', {
    _resetPasswordDialog: {
      title: 'Restablece tu contraseña',
      cancel: 'Cancelar',
      submit: 'Guardar'
    },
    _enrollAccountDialog: {
      title: 'Escribe una contraseña',
      cancel: 'Cerrar',
      submit: 'Guardar contraseña'
    },
    // ...
})
```

You can use the translation files in the `i18n` folder as an example.


Screenshots
-------------

![Sign In](https://dl.dropboxusercontent.com/u/7263172/1.png)
![Sign Up](https://dl.dropboxusercontent.com/u/7263172/2.png)
![Configure Login Service](https://dl.dropboxusercontent.com/u/7263172/3.png)
