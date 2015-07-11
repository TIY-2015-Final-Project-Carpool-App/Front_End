(function() {
  'use strict';

  angular.module('myApp')

  .controller('LoginCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService){

     $scope.loginUser = function (user) {
          RegService.loginUser(user);
       };

     $scope.logoutUser = function () {
       console.log('here');
          RegService.logoutUser();
       };
     $scope.loginTrue = function (user) {
          RegService.loginTrue(user);
       };
     $scope.loginFalse = function (user) {
          RegService.loginFalse(user);
       };
    }
  ]);
}());
