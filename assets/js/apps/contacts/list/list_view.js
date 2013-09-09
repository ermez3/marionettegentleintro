ContactManager.module('ContactsApp.List', function(List,ContactManager,Backbone,Marionette, $ , _) {
  
  List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: Handlebars.templates.contactlistitem,

		events:{
			"click": "highlightName"
		},

		highlightName: function(){
			this.$el.toggleClass('warning');
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
