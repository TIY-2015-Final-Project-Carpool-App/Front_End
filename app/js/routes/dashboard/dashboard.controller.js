(function() {
  'use strict';

  angular.module('myApp')

  .controller('DashboardCtrl', ['$scope', '$http', '$state', 'DashboardService',
   function($scope, $http, $state, DashboardService) {

     console.log('This is the DashboardCtrl');

   }
  ]);
}());
