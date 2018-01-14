var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function($scope, $location, $http, $timeout, $interval) {
  $scope.firstName= "Piyush";
  $scope.lastName= "Roy";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
  $scope.names = ["Emil", "Tobias", "Linus"];
  $scope.myHeader = "Hello " + $scope.fullName() + "!";
  $scope.count = 0;
  $scope.myUrl = $location.absUrl();
  $timeout(function () {
    $scope.myHeader = "How are you today?";
  }, 2000);
  $interval(function () {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
  $http.get("https://www.w3schools.com/angular/customers_mysql.php").then(function (response) {
    $scope.records = response.data.records;
  });
});
  
app.directive("w3TestDirective", function() {
  return {
      template : "I was made in a directive constructor!"
  };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("https://www.w3schools.com/angular/main.htm", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});