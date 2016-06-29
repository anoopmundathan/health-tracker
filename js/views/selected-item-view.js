"use strict";

var APP = APP || {};

APP.SelectedItemView = Backbone.View.extend({
	tagName: 'li',

	template: _.template($('#selected-item-template').html()),

	render: function() {
		$(".selected-items").append(this.$el.html(this.template(this.model)));
		return this;
	}

});