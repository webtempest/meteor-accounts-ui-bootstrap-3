Template.LoginButtons.Wrap = function () {
  if(Accounts.ui._options.wrap === "div") {
    return Template._LoginButtonsWrapDiv;
  } else {
    return Template._LoginButtonsWrapLi;
  }
}

Template.LoginButtons.created = function () {
  Utils.setVar("dropdown", "_LoginButtonsSignUpDropdown");
}

Template.LoginButtons.displayName = function () {
  return Accounts.ui._options.displayName();
}

Template.LoginButtons.LoginButtonsDropdown = function () {
  var tplName = "_LoginButtonsSignUpDropdown";

  if(Meteor.userId()) {
    tplName = "_LoginButtonsLoggedInDropdown";
  } else {
    tplName = Utils.getVar("dropdown");
  }

  return Template[tplName] || null;
}

Template._LoginButtonsSignUpDropdown.fields = function () {
  var src = Accounts.ui._options.fields["sign-up"];

  return _.map(_.keys(src), function (key) {
    var obj = src[key];
    return {
      field: key,
      required: obj.required,
      type: obj.type || "text"
    }
  });
}


UI.registerHelper("_lbtext", function (label) {
  return i18n("lb." + label);
});

UI.registerHelper('loginButtons', function () {
  throw new Error("Use {{> LoginButtons}} see github for more info");
});