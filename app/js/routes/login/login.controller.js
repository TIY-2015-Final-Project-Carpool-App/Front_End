(function() {
  'use strict';

  angular.module('myApp')

  .controller('LoginCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService){

     $scope.loginUser = function (user) {
          RegService.loginUser(user);
       };

     $scope.logoutUser = function () {
          RegService.logoutUser();
       };
     $scope.homeCheckLogin = function () {
          RegService.homeCheckLogin();
       };
     $scope.checkLogin = function () {
          RegService.checkLogin();
       };
    }
  ]);
}());
