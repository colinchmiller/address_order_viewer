/**
 * Created by colinmiller on 11/17/15.
 */

myApp.factory('UserGetter', ['$http', function($http){
    var data = undefined;

    var getUser = function(){
        $http.get('/user').then(function(res){
            data = res.data;
            console.log("This is the data: ", data);
            return data;
        });
    };

    var publicApi = {
        retrieveData: function(){
            getUser();
            console.log("The data from retrieveData is: ", data);
        },
        peopleData: function(){
            console.log("The data being pulled in from retrieveData to the peopleData function is: ", data);
            return data;
        }
    };

    console.log("The publicApi is:", publicApi);
    return publicApi;
}]);