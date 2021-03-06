angular.module( 'kitchen-time' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope', '$state', '$stateParams', '$location', '$anchorScroll', 'ngDialog' ];

function homeController( $scope, $state, $stateParams, $location, $anchorScroll, ngDialog ) {

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
  $scope.selected = "Cocinas";
  vm.isDropdownDisplayed = false;

  vm.go = go;
  vm.closeClick = closeClick;
  vm.showDropdown = showDropdown;
  vm.select = select;

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

  function showDropdown(){
    vm.isDropdownDisplayed = !vm.isDropdownDisplayed;
  }

  function select( name ) {
    $scope.selected = name;
    vm.isDropdownDisplayed = false;
  };

};
