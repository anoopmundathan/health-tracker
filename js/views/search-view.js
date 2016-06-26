"use strict";

var APP = APP || {};

APP.SearchView = Backbone.View.extend({
	el: '#search-view',
	
	events: {
		'input #search-box': 'searchFood'
	},
	
	initialize: function() {
		this.searchField = $('#search-box');
		this.collection = new APP.FoodCollection();
		this.list = $('.food-list');
	},

	searchFood: function(event) {

		var self = this;
		// Update input value of the collection
		this.collection.setInputVal(this.searchField.val());
		this.collection.getJSON(function(response) {
			response.forEach(function(item) {
				self.render(item);
			});
		});
	},

	render: function(item) {
		this.list.html('');
		var searchResultView = new APP.SearchResultView({model: item});
		this.list.append(searchResultView.render().el);
	}

});