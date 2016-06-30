"use strict";

var APP = APP || {};

// This view represents selected item
APP.SearchResultView = Backbone.View.extend({

	tagName: 'li',
	
	events: {
		'click': 'addSelectedItem'
	},

	initialize: function() {
		this.selectedFoodCollection = new APP.SelectedFoodCollection();
	},

	template: _.template($('#search-result-template').html()),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
      	return this;
	},

	addSelectedItem: function() {

		// Instantiate new Model for selected item
		this.selectedFood = new APP.SelectedFood({
			brand: this.model.attributes.brand_name,
			item: this.model.attributes.item_name,
			cal: this.model.attributes.calories
		});
		
		// Render selected item view
		this.selectedItemView = new APP.SelectedItemView({model:this.selectedFood.attributes});
		this.selectedItemView.render();
	}

});

