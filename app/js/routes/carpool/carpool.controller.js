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
        };


        $scope.addCP = function (trip, invites) {
          CarpoolService.addCP(trip, invites);
        };

        $scope.addAppointment = function (appointment) {
          console.log('Appointments: ' + appointment);
          $scope.appointments = CarpoolService.addAppointment(appointment);
        };
   }
  ]);
}());