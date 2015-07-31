angular.module( 'kitchen-time' ).controller( 'catalogueController', catalogueController );

catalogueController.$inject = [ '$scope', '$timeout', '$state'];

function catalogueController( $scope, $timeout, $state ) {

  var vm = this;
  var target = document.getElementById( 'kitchen' );
  vm.kitchens_array = [];
  vm.kitchen = {};
  vm.current_image = 1;
  vm.carrusel_control = 0;

  vm.goContact = goContact;
  vm.goHome = goHome;
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
      { image_path: '2', description: 'Otra descripción breve de lo que es la cocina: cocina, medidas, componentes y electrodomésticos.' },
      { image_path: '3', description: 'Una descripción breve de lo que es la cocina: cocina, medidas, componentes y electrodomésticos.' },
      { image_path: '4', description: 'Casi la última descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '5', description: 'Una más descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '6', description: 'Una más descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '7', description: 'Cocina: cocina, cocina, cocina y cocina.' },
      { image_path: '8', description: 'Breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '9', description: 'Descripción descriptiva de la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '10', description: 'Materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '11', description: 'Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '12', description: 'Descripción de la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '13', description: 'Descripción de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '14', description: 'Descripción: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '15', description: 'Descripción descriptiva: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '16', description: 'Descripción: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '17', description: 'Breve descripción de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
      { image_path: '18', description: 'Descripción breve de lo que es la cocina: materiales, medidas, componentes y electrodomésticos.' },
    ];
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

  function goContact() {
    $state.go( 'home', {section: 'contact'} );
  }

  function goHome(){
    $state.go( 'home' );
  }

  /////////////////////////////////////////////////////

  $scope.$watch( 'vm.kitchen', function() {
  });


};
