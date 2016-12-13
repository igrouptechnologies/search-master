var myApp = angular.module('myApp');

myApp.controller('SchoolsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SchoolsController loaded...');

	$scope.getSchools = function(){
		$http.get('/api/schools').success(function(response){
			$scope.schools = response;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/schools/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/schools/', $scope.book).success(function(response){
			window.location.href='#/schools';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/schools/'+id, $scope.book).success(function(response){
			window.location.href='#/schools';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/schools/'+id).success(function(response){
			window.location.href='#/schools';
		});
	}
}]);