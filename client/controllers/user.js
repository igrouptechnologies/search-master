
angular.module('myApp').controller('UserController', 
		['$scope', '$http', '$location', '$routeParams', 
		 function($scope, $http, $location, $routeParams){
	console.log('UserController loaded...');
	
	
	$scope.register = function(){
        console.log("register method invoke");
        $http.post('/api/users/', $scope.user).success(function(response){
			console.log("session start : " + $scope.user);
            
		});
	}
    
    $scope.login = function(){
        var user = $scope.user;
        console.log("login method invoke");
        $http.get('/api/users/'+user.username).success(function(response){
           	console.log("session start : " + $scope.user);
		});
	}
	
	
}]);