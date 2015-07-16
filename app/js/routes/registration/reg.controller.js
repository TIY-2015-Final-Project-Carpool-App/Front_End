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
     $scope.userChildReg = function(x,y,child) {
       console.log(x,y,child);
         RegService.userChildReg(x,y,child);
       };

   }
  ]);
}());


//When logout update the headers access_token back to an empty string
