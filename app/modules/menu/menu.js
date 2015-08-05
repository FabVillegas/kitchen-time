angular.module( 'kitchen-time' ).directive( 'landingMenu', ['$window', '$location', '$anchorScroll', function( $window, $location, $anchorScroll ){
  return{
    restrict: 'E',
    scope: false,
    transclude: true,
    templateUrl: 'modules/menu/menu.html',
    link: function( scope, iElement, iAttrs ) {
      scope.displayMenu = true;
      scope.showOptions = false;
      scope.selected = "Cocinas";

      var target = document.getElementById( 'special-fix' );
      scope.special = angular.element( target );

      scope.show = function() {
        scope.showOptions = !scope.showOptions;
      };

      scope.changeSelected = function( name ) {
        scope.selected = name;
        scope.showOptions = false;
        if( name === 'Puertas de comunicación' ) {
          scope.special.css({
            'line-height': '22px'
          });
        }
        else{
          scope.special.css({
            'line-height': '45px'
          });
        }
      };
    }
  }
}]);
