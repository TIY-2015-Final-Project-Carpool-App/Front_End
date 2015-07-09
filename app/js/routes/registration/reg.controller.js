(function() {
  'use strict';

  angular.module('myApp')

  .controller('RegCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService) {

     $scope.addUser = function (user) {
          RegService.addUser(user);
        };

   }
  ]);
}());


//When logout update the headers access_token back to an empty string
