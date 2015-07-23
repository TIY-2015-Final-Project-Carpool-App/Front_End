(function() {
  'use strict';

  angular.module('myApp')

  .controller('CarpoolCtrl', ['$scope', '$http', '$state', 'CarpoolService', 'SERVER', 'RegService', '$cookies',
   function($scope, $http, $state, CarpoolService, SERVER, RegService, $cookies) {

      var endpoint = SERVER.URL;

      var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };
      // Get carpool ID
      var user = getUserInfo();
      // console.log('User ', user);

      var username = user.username;
      // console.log("This is the User's username: ", username);

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



       // =======================
       // Create an Appointment
       // =======================

      $scope.addAppointment = function (appointment) {
          RegService.checkUser(); //Pass this to have access_token to pass with submit
            console.log(SERVER.CONFIG);

          $http.get(endpoint + '/user/'+ username +'/carpools', SERVER.CONFIG)
            .then( function (response) {
             var carpool_id =  _.pluck(response.data, 'id');
              console.log(carpool_id);
              console.log('This is the response from addAppointment in CTRL: ', response);
              $http.post(endpoint + '/carpool/'+ carpool_id +'/appointments', appointment, SERVER.CONFIG);

            });
        };

      // ===========================
      // Create an Appointment End
      // ===========================


   }
  ]);
}());