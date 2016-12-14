
var myApp = angular.module('myApp');

myApp.controller('SearchController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SearchController loaded...');

	$scope.getSearch = function(){
		console.log("Search Invoked");
		
		
		$http.get('/api/schools').
		  then(function onSuccess(response) {
		    // Handle success
				$scope.result = response;
				$scope.isResult = true;
				console.log(response);
		
		  });


	}	
}]);