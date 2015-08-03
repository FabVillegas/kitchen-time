angular.module( 'kitchen-time' ).directive( 'imagesGrid', [ function( ){
  return{
    restrict: 'E',
    transclude: true,
    templateUrl: 'modules/imagesGrid/imagesGrid.html',
    link: function( scope, iElement, iAttrs ) {
      scope.cocinas = true;
      scope.closets =  false;
      scope.puertas = false;
      scope.muebles = false;

      /* Tal cual aparece en la vista solamente */
      scope.$watch( 'selected', function() {
        if( scope.selected === 'Cocinas') {
          scope.cocinas = true;
          scope.closets =  false;
          scope.puertas = false;
          scope.muebles = false;
        }
        else if( scope.selected === 'Clósets') {
          scope.cocinas = false;
          scope.closets =  true;
          scope.puertas = false;
          scope.muebles = false;
        }
        else if( scope.selected === 'Puertas de comunicación') {
          scope.cocinas = false;
          scope.closets =  false;
          scope.puertas = true;
          scope.muebles = false;
        }
        else if( scope.selected === 'Muebles para baño') {
          scope.cocinas = false;
          scope.closets =  false;
          scope.puertas = false;
          scope.muebles = true;
        }
      });
    }
  }
}]);
