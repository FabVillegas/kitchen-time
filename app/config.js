angular.module('kitchen-time', [
  'ui.router',
  'pc035860.scrollWatch',
  'ngAnimate',
  'sideWindow'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider.
	state('home', {
		url: '/home',
		templateUrl: 'states/home/home-view.html',
		controller: 'homeController'
	});
}]);
