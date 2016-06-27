"use strict";

var APP = APP || {};

APP.SearchResultView = Backbone.View.extend({

	tagName: 'li',

	template: _.template($('#search-result-template').html()),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
      	return this;
	}

});

