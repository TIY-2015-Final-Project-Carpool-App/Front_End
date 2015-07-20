(function() {
  'use strict';

  angular.module('myApp')

  .controller('CarpoolCtrl', ['$scope', '$http', '$state', 'CarpoolService',
   function($scope, $http, $state, CarpoolService) {

      $scope.invites = [{invite: '1'}];


        $scope.addNewInvite = function() {
          var inviteArray = [];
          var num = $scope.invites.length + 1;
          $scope.invites.push({'invite': num });
          // inviteArray.push( _.pluck(addNewInvite, 'email') );
          // return inviteArray;
        };


        $scope.addCP = function (trip, invite) {
          // console.log(trip);
          // console.log(invite);
          CarpoolService.addCP();
        };

   }
  ]);
}());