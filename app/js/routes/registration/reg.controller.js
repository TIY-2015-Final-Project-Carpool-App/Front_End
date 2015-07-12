(function() {
  'use strict';

  angular.module('myApp')

  .controller('RegCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService) {

     $scope.addUser = function (user) {
          RegService.addUser(user);
        };
     $scope.updateConfig = function (token) {
          RegService.updateConfig(token);
        };
     $scope.userChildReg = function(child) {
       console.log(child);
         RegService.userChildReg(child);
       };
   }
  ]);
}());


//When logout update the headers access_token back to an empty string
