"use strict";

var APP = APP || {};

APP.SearchView = Backbone.View.extend({
	el: '#search-view',
	
	events: {
		'input #search-box': 'searchFood'
	},
	
	initialize: function() {
		this.searchField = $('search-box');
		this.collection = new APP.FoodCollection();
	},

	searchFood: function(event) {

	}
});