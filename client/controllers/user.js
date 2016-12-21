var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('UsersController loaded...');

	$scope.getUsers = function(){
		$http.get('/api/users').success(function(response){
			$scope.users = response;
		});
	}

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+id).success(function(response){
			$scope.user = response;
		});
	}
	
	$scope.login = function(){
		var username = $scope.username;
		//console.log($scope.user);
		$http.get('/api/users/'+username).success(function(response){
			console.log(response);
			if($response.password === $scope.password)
			{
				console.log("User is validated");
			}else{
				console.log("User is not authorized");
			}
			
		});
	}

	$scope.addUser = function(){
		console.log($scope.user);
		$http.post('/api/users/', $scope.user).success(function(response){
			window.location.href='#/users';
		});
	}

	$scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.user).success(function(response){
			window.location.href='#/users';
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/users/'+id).success(function(response){
			window.location.href='#/users';
		});
	}
}]);