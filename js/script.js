var redrawismApp = angular.module('redrawismApp', ['ngRoute']);

redrawismApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
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

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("!");

});

redrawismApp.controller('mainController', function($scope) {
	$scope.selectedPage = "intro";
});