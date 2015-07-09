(function() {
  'use strict';

  angular.module('myApp')

  .controller('ProfileCtrl', ['$scope', '$http', '$state',
   function($scope, $http, $state) {

      console.log('This is the ProfileCtrl');

    }
  ]);
}());
