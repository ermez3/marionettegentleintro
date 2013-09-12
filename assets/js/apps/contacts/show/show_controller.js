ContactManager.module('ContactsApp.Show', function(Show,ContactManager,Backbone,Marionette,$,_){
  Show.Controller = {
  	showContact: function(id){
  		var contacts = ContactManager.request("contact:entities");
  		var contactView;
  		var model = contacts.get(id);
	  		if(model !== undefined){
	  		contactView = new Show.Contact({
	  			model: model
	  		});
  		}
  		else{
  			contactView = new Show.MissingContact();
  		}

  		ContactManager.mainRegion.show(contactView);
  	}
  }
});
