var signUp = function ($form) {
  var fields = Utils.formToHash($form);


}


Template.LoginButtons.events({
  "submit .form": function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $form = $(e.currentTarget);

    if($form.hasClass(".login-buttons-signup-form")) {
      signUp($form);
    } else {

    }

  },

  "click .btn-cancel": function (e) {

  }
});