ContactManager.module('Entities', function(Entities,ContactManager,Backbone, Marionette, $ , _){
	//Define Model
	Entities.Contact = Backbone.Model.extend({
		defaults: {
			firstName: 'No name defined',
			phoneNumber: 'No number defined'
		}
	});
	//Define collections
	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,

		comparator: function(contact) {
		 return contact.get("firstName").toLowerCase() + " " + contact.get("lastName").toLowerCase();
 		}

	});

	//Initialize contacts
	var contacts;

	var initializeContacts = function(){
		contacts = new Entities.ContactCollection([
			{
				id: 1,
				firstName: "Zlob",
				lastName: "Brigham"
			},
			{
				id: 2,
				firstName: "XoXo",
				lastName: "hello",
				phoneNumber: "12321312"
			},
			{
				id: 3,
				firstName: "lolo",
				lastName: "lohelo",
				phoneNumber: "12356"
			}
		]);
	};

	var API = {
		getContactEntities: function(){
			if(contacts === undefined){
				initializeContacts();
			}
			return contacts;
		}
	};

	//Request Handler so we can call ContactManager.request("contact:entities"); from anywhere in the app
	ContactManager.reqres.setHandler("contact:entities",function(){
		return API.getContactEntities();
	});

});