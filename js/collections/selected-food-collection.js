"use strict";

var APP = APP || {};

APP.SelectedFoodCollection = Backbone.Collection.extend({
	model: APP.SelectedFood
});

APP.selectedFoodCollection = new APP.SelectedFoodCollection();