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
     $scope.homeCheckLogin = function (user) {
          RegService.homeCheckLogin(user);
       };
     $scope.checkLogin = function (user) {
          RegService.checkLogin(user);
       };
    }
  ]);
}());
