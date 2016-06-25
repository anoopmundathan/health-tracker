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
	},

	searchFood: function(event) {

		// Update input value of the collection
		this.collection.setInputVal(this.searchField.val());
		this.collection.fetch({
			success: function() {
				console.log('success');
			},
			error: function() {
				console.log('error');
			}
		});

	}
});