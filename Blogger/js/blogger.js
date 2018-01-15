function show(id) {
	$(id).css("display", "block");
}

function hide(id) {
	$(id).css("display", "none");
}

function showDashboard() {
	show('#dashboard'); 
	hide('#your-blogs'); 
	hide('#friends')
}

function showYourBlog() {
	hide('#dashboard'); 
	show('#your-blogs'); 
	hide('#friends')
}

function showFriends() {
	hide('#dashboard'); 
	hide('#your-blogs'); 
	show('#friends')
}

function showWriteBlog() {
	show('#write-blog'); 
	hide('#search-blog'); 
	hide('#user-search')
}

function showSearchBlog() {
	hide('#write-blog'); 
	show('#search-blog'); 
	hide('#user-search')
}

function showUserSearch() {
	hide('#write-blog'); 
	hide('#search-blog'); 
	show('#user-search')
}

function controlYourBlog() {
	var app = angular.module('table_module', []);
	app.controller('your_blog_controller', function($scope) {
		$scope.your_blogs = [];
		$scope.friend_data = [];
		for(var i=0 ; i<10; i++) {
			$scope.your_blogs[i] = {"id": "piyush2k13", "blog": "some blogs", "publishedOn": Date.now()};
			$scope.friend_data[i] = {"id": "friend_id_1234", "blog": "some blogs", "publishedOn": Date.now()};
		}
	});
}