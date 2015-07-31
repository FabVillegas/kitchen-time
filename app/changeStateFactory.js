angular.module( 'kitchen-time' ).factory( 'changeStateFactory', changeStateFactory );

changeStateFactory.$inject = [ '$scope', '$state' ];

function changeStateFactory( $scope, $state ) {
  return{
    go: function( stateName){
      $state.go( stateName );
    }
  }
};
