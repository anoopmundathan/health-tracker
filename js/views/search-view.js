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
		this.listenTo(this.collection, 'sync', this.render);
	},

	searchFood: function(event) {

		// Update input value of the collection
		this.collection.setInputVal(this.searchField.val());
		this.collection.fetch({
			success: function() {
			},
			error: function() {
				console.log('error');
			}
		});

		console.log('searchFood');
		console.log(this.collection);
	},

	render: function() {
		console.log(this.collection);
	}

});