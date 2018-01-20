

function showTab(selection, element, classValue) {
	currentSelection = $(selection).attr('href')
	$(currentSelection).css("display", "none");
	// Remove from anchor
	$("[href='" + currentSelection + "']").removeClass();
	$(element).fadeIn();
	// // add to anchor
	$("[href='" + element + "']").addClass(classValue);
	
}

function controlYourBlog() {
	var app = angular.module('table_module', []);
	app.controller('your_blog_controller', function($scope) {
		$scope.your_blogs = [];
		$scope.friend_data = [];
		for(var i=0 ; i<20; i++) {
			$scope.your_blogs[i] = {"id": "piyush2k13", "blog": "some blogs", "publishedOn": Date.now()};
			$scope.friend_data[i] = {"id": "friend_id_1234", "blog": "some blogs", "publishedOn": Date.now()};
		}
	});
}