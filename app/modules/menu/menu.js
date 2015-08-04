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

      scope.show = function() {
        scope.showOptions = !scope.showOptions;
      };

      scope.changeSelected = function( name ) {
        scope.selected = name;
        scope.showOptions = false;
      };
    }
  }
}]);
