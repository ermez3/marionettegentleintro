ContactManager.module('ContactsApp.Show',function(Show,ContactManager,Backbone,Marionette,$,_) {
  Show.Contact = Marionette.ItemView.extend({
  	template: Handlebars.templates.contactview
  });

  Show.MissingContact = Marionette.ItemView.extend({
  	template: Handlebars.templates.missingcontactview
  });
});
