(function() {
  'use strict';

  angular.module('myApp')

  .controller('LoginCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService){
      $scope.kishan = 'Bhakta';

      console.log('HERE');

    }
  ]);
}());
