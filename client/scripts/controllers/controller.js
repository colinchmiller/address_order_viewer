var myApp = angular.module('myApp', []);

myApp.controller('AddressController', ['$scope', function($scope){

   $scope.findAddress = function(selectedInput){
       console.log("test: ", selectedInput);
   }

}]);