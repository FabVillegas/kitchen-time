angular.module( 'kitchen-time' ).directive( 'imagesGrid', ['ngDialog', function( ngDialog ){
  return{
    restrict: 'E',
    scope: {},
    transclude: true,
    templateUrl: 'modules/imagesGrid/imagesGrid.html',
    link: function( scope, iElement, iAttrs ) {
      scope.cocinas = true;
      scope.closets =  false;
      scope.puertas = false;
      scope.muebles = false;

      scope.openBigger = openBigger;

      if( iAttrs.show === 'cocinas') {
        scope.cocinas = true;
        scope.closets =  false;
        scope.puertas = false;
        scope.muebles = false;
      }
      else if( iAttrs.show === 'closets') {
        scope.cocinas = false;
        scope.closets =  true;
        scope.puertas = false;
        scope.muebles = false;
      }
      else if( iAttrs.show === 'puertas') {
        scope.cocinas = false;
        scope.closets =  false;
        scope.puertas = true;
        scope.muebles = false;
      }
      else if( iAttrs.show === 'muebles') {
        scope.cocinas = false;
        scope.closets =  false;
        scope.puertas = false;
        scope.muebles = true;
      }

      function openBigger( image ) {
        ngDialog.open({
          template: '<img style="width: 100%; height: auto; margin-top: 10px;" src="' + image + '">',
          plain: true,
          scope: scope
        });
      };

    }
  }
}]);
