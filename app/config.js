angular.module('kitchen-time', [
  'ui.router',
  'pc035860.scrollWatch',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'fabEasterEgg'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider.
	state('home', {
		url: '/home',
		templateUrl: 'states/home/homeView.html',
		controller: 'homeController'
	}).
  state('catalogue', {
    url: '/catalogue',
    templateUrl: 'states/catalogue/catalogueView.html',
    controller: 'catalogueController'
  });
}]);
