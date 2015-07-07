(function() {
  'use strict';

  angular.module('myApp')

  .controller('LoginCtrl', ['$scope', '$http', '$state',
   function($scope, $http, $state){
      $scope.kishan = 'Bhakta';

      console.log('HERE');

    }
  ]);
}());
