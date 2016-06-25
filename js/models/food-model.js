"use strict";

var APP = APP || {};

APP.Food = Backbone.Model.extend({
	defaults: {
		brand: '',
		name: '',
		calories: 0
	}
});