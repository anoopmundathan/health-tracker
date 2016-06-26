"use strict";

var APP = APP || {};

APP.FoodCollection = Backbone.Model.extend({
	
	model: APP.Food,
	
	setInputVal: function(input) {
		this.inputVal = input;	
	},

	url: function() {

  		var url = 'https://api.nutritionix.com/v1_1/search/',
          input = this.inputVal,
          results = '?results=0%3A11&cal_min=0&cal_max=50000',
          fields = '&fields=item_name%2Cbrand_name%2cnf_calories',
          id = '&appId=92271326',
          key = '&appKey=e0e5018302c5aaee5b558d11b355d4db';

        return url + input + results + fields + id + key;
	},

	parse: function(response) {
		var searchItems = [],
		    length = response.hits.length;

		for (var i = 0; i < length; i++) {
			var foodItem = new APP.Food({
				brand_name: response.hits[i].fields.brand_name,
				item_name: response.hits[i].fields.item_name,
				calories: response.hits[i].fields.nf_calories
			});
			searchItems.push(foodItem);
		}
		return searchItems;
	},

	getJSON: function(cb) {
		var self = this;
		$.ajax({
			url: this.url(),
			dataType: 'json'
		}).done(function(response){
			cb(self.parse(response));
		});
	},
});
