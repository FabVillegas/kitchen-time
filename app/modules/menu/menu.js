angular.module( 'kitchen-time' ).directive( 'landingMenu', ['$window', '$location', '$anchorScroll', function( $window, $location, $anchorScroll ){
  return{
    restrict: 'E',
    scope: false,
    transclude: true,
    templateUrl: 'modules/menu/menu.html',
    link: function( iScope, iElement, iAttrs ) {
      iScope.displayMenu = true;
      /*
      var target = angular.element($window);
      target.bind('scroll', function(){
        console.log( iElement[0].children );
        iElement[0].children.css({
          'background': 'rgba(33,33,33,0.90)'
        });
        //iScope.displayMenu = true;
        iScope.$apply();
      });
      */
    }
  }
}]);
