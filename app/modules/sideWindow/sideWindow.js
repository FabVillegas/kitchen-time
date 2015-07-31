var app = angular.module( 'sideWindow', [] );

app.directive( 'sideWindow', function( $compile ) {
	return {
		restrict:'E',
		scope: {},
		transclude: true,
		template:'<div ng-transclude></div>',
		link: function( scope, element, attrs ) {

			scope.menuIsShown = false;

			// symbols ╳ → ←
			scope.symbol = '→';
			angular.element( element[0].children[0] ).append( angular.element( $compile('<div class="open-close-icon" ng-click="toggleMenu()">{{symbol}}</div>')(scope) ) );
			/*
			if( attrs.useBlackIcon !== undefined ) {
				angular.element( element[0].children[0] ).append( angular.element( $compile('<div class="menu-icon" ng-click="toggleMenu()">→ ←</div>')(scope) ) );
			}
			else{
				angular.element( element[0].children[0] ).append( angular.element( $compile('<img class="menu-icon" ng-click="toggleMenu()" src="images/menu-white.svg">')(scope) ) );
			}
			*/
      scope.toggleMenu = function(){
        scope.menuIsShown = !scope.menuIsShown;
				if(scope.menuIsShown === false) {
					scope.symbol = '→';
				}
				else{
					scope.symbol = '←';
				}
      };

    }
  }
});
