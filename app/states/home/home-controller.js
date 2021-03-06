angular.module( 'kitchen-time' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope' ];

function homeController( $scope ) {
  var vm = $scope;

  ///////////////////////////////////////////////////////

  angular.forEach( [ 1, 2, 3, 4, 5, 6, 7 ], function( i ) {
    vm.$on('slide' + i, onSlideChange);
  });

  function onSlideChange( $evt, active, locals ) {
    vm[$evt.name] = active;
  };
};
