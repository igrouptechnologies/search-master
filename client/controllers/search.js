
var myApp = angular.module('myApp');

myApp.controller('SearchController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SearchController loaded...');

	$scope.getSearch = function(){
		console.log("Search Invoked");
		
		$http.get('/api/schools').success(function(response){
			$scope.result = response;
			$scope.isResult = true;
			console.log(response);
		});

	}	
}]);