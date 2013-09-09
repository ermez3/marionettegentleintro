ContactManager.module('ContactsApp.List', function(List,ContactManager,Backbone,Marionette, $ , _) {
  
  List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: Handlebars.templates.contactlistitem,

		events:{
			"click": "highlightName",
			"click button.js-delete": "deleteAction"
		},

		highlightName: function(e){
			e.preventDefault();
			this.$el.toggleClass('warning');
		},

		deleteAction: function(e){
			e.stopPropagation();
			//this has to be removed because views doesnt this role. We have to move this to the controller
			//this.model.collection.remove(this.model);
			this.trigger("contact:delete",this.model);
		}
	});

  List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: Handlebars.templates.contactlist,
		itemView: List.Contact,
		itemViewContainer: "tbody"
	});

});
