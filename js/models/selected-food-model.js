"use strict";

var APP = APP || {};

APP.SelectedFood = Backbone.Model.extend({
	defaults: {
		brand: '',
		item: '',
		cal: 0
	}
});