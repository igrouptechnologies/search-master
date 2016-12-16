
angular.module('myApp').controller('SearchController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SearchController loaded...');
	$scope.filteredResult = [];
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	
	
	$scope.getSearch = function(){
		console.log("Search Invoked");
		$scope.result = [];
		$http.get('/api/schools').
		  then(function onSuccess(response) {
		    // Handle success
			//$scope.result = response;
			$scope.isResult = true;
			//console.log(response);
			
			$scope.maxSize = 5; //Number of pager buttons to show
			
			for (var i=1;i<=response.data.length;i++) 
			{
				$scope.result.push(response.data[i]);
				//console.log(response.data[i]);
			}
			$scope.totalItems = $scope.result.length;
			$scope.currentPage = 1;
			$scope.displayResult();

		  });


	}
	
	 $scope.displayResult = function() {
		    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
		    var end = begin + $scope.itemsPerPage;
		    //console.log(begin + ": " + end );
		    $scope.filteredResult = $scope.result.slice(begin, end);
		   // console.log($scope.filteredResult);
		  };
	
	 $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	 };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    $scope.displayResult();
	  };

	$scope.setItemsPerPage = function(num) {
	  $scope.itemsPerPage = num;
	  $scope.currentPage = 1; //reset to first paghe
	}
}]);