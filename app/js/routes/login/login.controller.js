(function() {
  'use strict';

  angular.module('myApp',['ui.router'])

  .controller('LoginCtrl', ['$scope', '$http', '$state',
   function($scope, $http, $state){
      $scope.kishan = 'Bhakta';


    }
  ]);
}());
