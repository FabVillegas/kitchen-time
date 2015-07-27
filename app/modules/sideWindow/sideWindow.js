var app = angular.module( 'sideWindow', [] );

app.directive( 'sideWindow', function( $compile ) {
	return {
		restrict:'E',
		scope: {},
		transclude: true,
		template:'<div ng-transclude></div>',
		link: function( scope, element, attrs ) {

			if( attrs.useBlackIcon !== undefined ) {
				angular.element( element[0].children[0] ).append( angular.element( $compile('<img class="menu-icon" ng-click="toggleMenu()" src="images/menu-black.svg">')(scope) ) );
			}
			else{
				angular.element( element[0].children[0] ).append( angular.element( $compile('<img class="menu-icon" ng-click="toggleMenu()" src="images/menu-white.svg">')(scope) ) );
			}

			scope.menuIsShown = true;

      scope.toggleMenu = function(){
        scope.menuIsShown = !scope.menuIsShown;
      };

    }
  }
});
