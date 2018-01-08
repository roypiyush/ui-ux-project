function show(id) {
	$(id).css("display", "block");
}

function hide(id) {
	$(id).css("display", "none");
}

function controlYourBlog() {
	var app = angular.module('table_module', []);
	app.controller('your_blog_controller', function($scope) {
		$scope.your_blogs = [];
		$scope.friend_data = [];
		for(var i=0 ; i<10; i++) {
			$scope.your_blogs[i] = {"id": "piyush2k13", "blog": "some blogs"};
			$scope.friend_data[i] = {"id": "friend_id_1234", "blog": "some blogs"};
		}
	});
}