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
		//this.listenTo(this.collection, 'sync', this.render);
	},

	searchFood: function(event) {

		// Update input value of the collection
		this.collection.setInputVal(this.searchField.val());
		this.collection.getJSON(function(response) {
		
			response.forEach(function(item) {
				$('.food-list').append('<li>' + item.attributes.brand_name + '</li>');
				console.log(item.attributes.brand_name);
			});
		});
	},

	render: function() {
		this.collection()
		console.log(this);
		this.collection.each(function(item){

			console.log(item);
        	/*var foodview = new app.SearchSingleView({model: item});
        	this.$list.append(foodview.render().el);*/

      	}.bind(this));

	}

});