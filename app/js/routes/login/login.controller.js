(function() {
  'use strict';

  angular.module('myApp')

  .controller('LoginCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService){

     $scope.loginUser = function (user) {
          RegService.loginUser(user);
       };

     $scope.logoutUser = function () {
       console.log('logged out');
          RegService.logoutUser();
       };

     $scope.statusCheck = function () {
          RegService.statusCheck();
       };
     $scope.loginTrue = function () {
       console.log('logged in');
          RegService.loginTrue();
       };
     $scope.loginFalse = function () {
       console.log('not logged in');
          RegService.loginFalse();
       };
    }
  ]);
}());
