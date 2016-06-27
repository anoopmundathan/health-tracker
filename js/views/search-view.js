"use strict";

var APP = APP || {};

APP.SearchView = Backbone.View.extend({
	el: '#search-view',
	
	events: {
		'input #search-box': 'searchFood'
	},
	
	initialize: function() {
		this.searchField = $('#search-box');
		this.list = $('.food-list');

		this.collection = new APP.FoodCollection();
		this.listenTo(this.collection, 'sync', this.render);
	},

	searchFood: function(event) {

		var self = this;
		// Update input value of the collection
		this.collection.setInputVal(this.searchField.val());
		this.collection.fetch({
			error: function(){
          		self.$list.html('');
          		self.$list.append('<h2>Oops, something went wrong!</h2><p>Please try later or reload the page.</p>');
        	}
		});
	},

	render: function() {
		var self = this;

		this.list.html('');

		this.collection.each(function(item) {
			var searchResultView = new APP.SearchResultView({model: item});
			self.list.append(searchResultView.render().el);
		}.bind(this));
	}

});

