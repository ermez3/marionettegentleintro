ContactManager.module('ContactsApp.List', function(List,ContactManager,Backbone,Marionette, $ , _){

	List.Controller ={
		listContacts: function(){
			var contacts = ContactManager.request("contact:entities");

			var contactsListView = new List.Contacts({
				collection: contacts
			});

			contactsListView.on("itemview:contact:delete",function(chidlView,model){
				contacts.remove(model);
			});

			contactsListView.on("itemview:contact:show",function(chidlView,model){
				ContactManager.trigger("contact:show",model.get('id'));				
			});

			ContactManager.mainRegion.show(contactsListView);
		}
	}

});
