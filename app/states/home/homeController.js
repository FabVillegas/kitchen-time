angular.module( 'kitchen-time' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope', '$state', '$stateParams', '$location', '$anchorScroll' ];

function homeController( $scope, $state, $stateParams, $location, $anchorScroll ) {

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
  vm.changeKitchen = changeKitchen;

  active();

  //////////////////////////////////////////////////////////

  function active() {
    if( $stateParams.section === 'contact' ){
      $location.hash('contact');
      $anchorScroll();
    }
  };

  function go( stateName ){
    $state.go( stateName );
  };

  function closeClick() {
    vm.windowOptions.visible = false;
  };

  $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
  };

  function changeKitchen( direction ) {
    if( direction === 'next' ) {
      vm.kitchen = vm.kitchens_array[ ( ( vm.carrusel_control + 1 ) % vm.kitchens_array.length )];
      vm.carrusel_control = ( vm.carrusel_control + 1 ) % vm.kitchens_array.length;
    }
    else if( direction === 'prev' ) {
      if ( vm.carrusel_control === 0) {
        vm.carrusel_control = vm.kitchens_array.length;
      }
      vm.kitchen = vm.kitchens_array[ ( ( vm.carrusel_control - 1 ) % vm.kitchens_array.length )];
      vm.carrusel_control = ( vm.carrusel_control - 1 ) % vm.kitchens_array.length;
    }
  };


};
