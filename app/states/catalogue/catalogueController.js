angular.module( 'kitchen-time' ).controller( 'catalogueController', catalogueController );

catalogueController.$inject = [ '$scope', '$timeout', '$state'];

function catalogueController( $scope, $timeout, $state ) {

  var vm = this;
  var target = document.getElementById( 'kitchen' );
  vm.kitchens_array = [];
  vm.kitchen = {};
  vm.current_image = 1;
  vm.carrusel_control = 0;

  vm.goBack = goBack;
  vm.changeKitchen = changeKitchen;

  active();

  //////////////////////////////////////////////////

  function active() {
    initiateArray();
    vm.kitchen = vm.kitchens_array[vm.carrusel_control];
    transition();
  };

  function initiateArray() {
    vm.kitchens_array = [
      { image_path: '1', description: 'Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '2', description: 'Otra Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '3', description: 'Una Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '4', description: 'Casi la última Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '5', description: 'Una más Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
    ];
  };

  function changeKitchen( direction ) {
    if( direction === 'next' ) {
      vm.kitchen = vm.kitchens_array[ ( ( vm.carrusel_control + 1 ) % vm.kitchens_array.length )];
      vm.carrusel_control = ( vm.carrusel_control + 1 ) % vm.kitchens_array.length;
      transition();
    }
    else if( direction === 'prev' ) {
      if ( vm.carrusel_control === 0) {
        vm.carrusel_control = vm.kitchens_array.length;
      }
      vm.kitchen = vm.kitchens_array[ ( ( vm.carrusel_control - 1 ) % vm.kitchens_array.length )];
      vm.carrusel_control = ( vm.carrusel_control - 1 ) % vm.kitchens_array.length;
      transition();
    }
  };

  function transition() {
    angular.element( target ).css({
      'opacity': '0',
    });
    $timeout(function(){
      angular.element( target ).css({
        'opacity': '1',
      });
    }, 750);
  };

  function goBack(){
    $state.go( 'home' );
  }

  /////////////////////////////////////////////////////

  $scope.$watch( 'vm.kitchen', function() {
  });


};
