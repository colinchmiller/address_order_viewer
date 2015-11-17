/**
 * Created by colinmiller on 11/16/15.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/addressdisplay', {
        templateUrl: "/assets/views/routes/addressdisplay.html"
    }).
        when('/orderlookup', {
        templateUrl: "/assets/views/routes/orderlookup.html"
    }).
        otherwise({
        redirectTo: 'addressdisplay'
    })
}]);

