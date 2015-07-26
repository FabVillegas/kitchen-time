var app = angular.module( 'sideWindow', [] );

app.directive( 'sideWindow', function() {
	return {
		restrict:'E',
		scope: {},
		transclude: true,
		templateUrl:'./modules/sideWindow/sideWindow.html',
		link: function( scope, element, attrs ) {

			scope.menuIsShown = false;

      scope.toggleMenu = function(){
        scope.menuIsShown = !scope.menuIsShown;
      };

    }
  }
});
