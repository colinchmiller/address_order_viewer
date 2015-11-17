/**
 * Created by colinmiller on 11/16/15.
 */

myApp.factory('AddressGetter', ['$http', function($http){

    var getAddress = function(){
        $http.get('/address').then(function(res){
            console.log('Successful return from server');
        });
    };


}]);