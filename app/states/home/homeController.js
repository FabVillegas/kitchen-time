angular.module( 'kitchen-time' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope', '$timeout' ];

function homeController( $scope, $timeout ) {

  $scope.map = { center: { latitude: 25.656681, longitude: -100.36575 }, zoom: 19 };

  $scope.options = { scrollwheel: false };

  $scope.marker = {
    id: 0,
    coords: {
      latitude: 25.656681,
      longitude: -100.36575
    },
  };

  $scope.windowOptions = { visible: true };

  $scope.window = {
    template: './states/home/maps-template.html',
  };

  $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
  };

  $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
  };

};
