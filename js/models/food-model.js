"use strict";

var APP = APP || {};

APP.Food = Backbone.Model.extend({
	defaults: {
		brand_name: '',
		item_name: '',
		calories: 0
	}
});