angular.module('ApotropaApp', ['ngMaterial', 'ngRoute'])

.controller('MainController', function($scope) {})

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/code', {
			templateUrl: 'code/code.html',
			controller: 'MainController'
		})
		.when('/publication', {
			templateUrl: 'publication/publication.html',
			controller: 'MainController'
		})
		.when('/teaching', {
			templateUrl: 'teaching/teaching.html',
			controller: 'MainController'
		})
		.when('/skills', {
			templateUrl: 'skills/skills.html',
			controller: 'MainController'
		})
		.otherwise({
			templateUrl: 'home.html',
			controller: 'MainController'
		});
});

