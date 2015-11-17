myApp.controller('AddressController', ['$scope', 'UserGetter', function($scope, UserGetter){

    $scope.findUsers = [];
    $scope.userGetter = UserGetter;

    if($scope.userGetter.peopleData() === undefined){
        $scope.userGetter.retrieveData();
    }
    $scope.findUsers = $scope.userGetter.peopleData();
    console.log("The part to be uploaded to the dropdown is: ", $scope.userGetter.peopleData());
       //[
       //    "One",
       //    "Two",
       //    "Three"
       //];

    $scope.change = function(selected){
        console.log("This is the selected value: ", selected);
    }

}]);

