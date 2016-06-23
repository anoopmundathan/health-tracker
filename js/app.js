"use strict;"

var APP = APP || {};

APP.Data = (function() {

	// Nutritionix API
	var APP_ID = '92271326';
	var APP_KEY = 'e0e5018302c5aaee5b558d11b355d4db';

	var NUTRI_API_BASE = 'https://api.nutritionix.com/v1_1/search/';
  	var NUTRI_API_TRAIL = "?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + APP_ID + "&appKey=" + APP_KEY +'"';

  	// This function retrieves food item
	function getFood(food, callback) {
		// Construct food search API URL
		var foodSearchURL = NUTRI_API_BASE+ food + NUTRI_API_TRAIL;
	
		// Make asynchronous request
		request(foodSearchURL, function(response) {
			callback(response);
		});
	}

  	// Make asynchronous request
	function request(url, cb) {
		
		// jQuery Ajax request
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			success: function (response) {
				console.log(response);
				cb(response);
			},
			error: function() {
				console.log('something wrong');
			}
		});
	}

	return {
		getFood: getFood
	}

})();

$(document).ready(function() {
	// Register click event 
	$('#click-me').click(function(e) {
		// Prevent default action
		e.preventDefault();
		var food = $('#search-box').val();
		
		// Make ajax request
		APP.Data.getFood(food, function(response) {
			//console.log('response' + response);
		});
	});
});

