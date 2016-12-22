
angular.module('myApp').controller('UserController', 
		['$scope', '$http', '$location', '$routeParams', 
		 function($scope, $http, $location, $routeParams){
	console.log('UserController loaded...');
	
	
	$scope.register = function(){
        console.log("register method invoke");
        if($scope.user.password === $scope.user.retypepassword) 
        {
	        $http.post('/api/users/', $scope.user).success(function(response){
				console.log("session start : " + JSON.stringify($scope.user));
			});
        }else{
        	console.log("Both password are not same");
        }
	}
    
    $scope.login = function(){
        var user = $scope.user;
        console.log("login method invoke");
        $http.get('/api/users/'+user.username).success(function(response){
           	console.log("session start : " + $scope.user);
		});
	}
    
    $scope.forgetpassword = function(){
        var user = $scope.user;
        console.log("login method invoke");
        $http.get('/api/users/'+user.username).success(function(response){
           	console.log("session start : " + $scope.user);
		});
	}
	
	
}]);