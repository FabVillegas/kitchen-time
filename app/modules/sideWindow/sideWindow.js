angular.module( 'kitchen-time' ).directive( 'sideWindow', function( $compile, $state ) {
	return {
		restrict:'E',
		scope: {},
		link: function( scope, element, attrs ) {
			scope.menuIsShown = false;
			// symbols ╳ → ←
			scope.symbol = '→';

			scope.go = function( stateName ){
				$state.go( stateName );
			};

      scope.toggleMenu = function(){
        scope.menuIsShown = !scope.menuIsShown;
				if(scope.menuIsShown === false) {
					scope.symbol = '→';
				}
				else{
					scope.symbol = '←';
				}
      };

			$compile(element.contents())(scope);

    }
  }
});
