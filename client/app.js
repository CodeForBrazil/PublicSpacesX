accountsUIBootstrap3.setLanguage('pt-BR');

Meteor.startup(function() {
  GoogleMaps.load({key: 'AIzaSyBPiG1KX7Df9X7HiyBeX1yXeGuOEYxTUlg'});
});



//Use username instead of email for signup
/*
Accounts.ui.config({
passwordSignupFields: "USERNAME_ONLY"
});
*/
