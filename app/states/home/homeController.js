angular.module( 'kitchen-time' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope', '$state' ];

function homeController( $scope, $state ) {

  var vm = this;
  vm.map = { center: { latitude: 25.656681, longitude: -100.36575 }, zoom: 19 };
  vm.options = { scrollwheel: false };
  vm.marker = {
    id: 0,
    coords: {
      latitude: 25.656681,
      longitude: -100.36575
    },
  };
  vm.window = {
    template: './states/home/maps-template.html',
  };
  vm.windowOptions = { visible: true };

  vm.go = go;
  vm.closeClick = closeClick;

  //////////////////////////////////////////////////////////

  function go( stateName ){
    $state.go( stateName );
  };

  function closeClick() {
    vm.windowOptions.visible = false;
  };

  $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
  };

};
