
// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/intro.html',
            controller  : 'mainController'
        })

        .when('/intro', {
            templateUrl : 'pages/intro.html'
        })

        .when('/gallery', {
            templateUrl : 'pages/gallery.html'
        })

        .when('/realised', {
            templateUrl : 'pages/realised.html'
        })

        .when('/redrawism', {
            templateUrl : 'pages/redrawism.html'
        });

});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
});
