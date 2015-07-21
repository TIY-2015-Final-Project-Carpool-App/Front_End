(function() {
  'use strict';

  angular.module('myApp')

  .controller('CarpoolCtrl', ['$scope', '$http', '$state', 'CarpoolService',
   function($scope, $http, $state, CarpoolService) {

      $scope.invites = [{invite: 0, emails: 'temp@temp.com'}];

      $scope.trip = {title: 'temp', description: 'temp temp'};


        $scope.addNewInvite = function() {
          var inviteArray = [];
          var num = $scope.invites.length;
          $scope.invites.push({'invite': num });
          // inviteArray.push( _.pluck(addNewInvite, 'email') );
          // return inviteArray;
        };


        $scope.addCP = function (trip, invites) {
          // console.log(trip);
          // console.log(invite);
          CarpoolService.addCP(trip, invites);
        };

   }
  ]);
}());