;(function (){

  'use strict';

  angular.module('myApp')
    .service('CarpoolService', ['SERVER', '$http', '$cookies', '$state', '$compile','$q', 'RegService',
      function (SERVER, $http, $cookies, $state, $compile, $q, RegService) {

      console.log('This is the CarpoolService');

      var endpoint = SERVER.URL;

      var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };

      var Carpool = function (options) {
        this.title        = options.title;
        this.description  = options.description;
        this.invite       = options.invite;
      };

      var Appointments = function (options) {
        this.start            = options.start;
        this.title            = options.title;
        this.origin           = options.origin;
        this.destination      = options.destination;
        this.distance_filter  = options.distance_filter;
        this.seats            = options.seats;
      };
      // ==================
      // Create a Carpool
      // ==================


      this.addCP = function (trip, invites) {

            invites = _.pluck(invites, 'emails');

            console.log('trip', trip);
            console.log('invite', invites);

            console.log('token', $cookies.get('access_token'));
            console.log('token', SERVER.CONFIG);

            RegService.checkUser(); //Pass this to have access_token to pass with submit

            $http.post(endpoint + '/carpools', trip, SERVER.CONFIG)

            .then(function(response) {

              console.log('response1', response);


              var emails = { emails: invites };

              return $http.post(endpoint + '/carpool/' + response.data.id, emails, SERVER.CONFIG);

            })

            .then(function(response){

              console.log('response2', response);

              $state.go('carpoolSuccess');
            });

        };

      // ======================
      // Create a Carpool End
      // ======================



      // =======================
      // Create an Appointment
      // =======================

      // Get carpool ID
      var user = getUserInfo();
      console.log('User ', user);
      var username = user.username;
      console.log("This is the User's username: ", username);

        RegService.checkUser(); //Pass this to have access_token to pass with submit
            console.log(SERVER.CONFIG);


      this.addAppointment = function (appointment) {

        var newAppointment = new Appointments(appointment);

        this.addAppointment()
        .then (function (results) {

          console.log('This is the response data from appointment:', results);

          return $http.post(endpoint + '/carpool/'+ response.data.id +'/appointments', results, SERVER.CONFIG);
        })
        .then (function(results){
          console.log('results 2 CP Service', results);
        });
      };




      // ===========================
      // Create an Appointment End
      // ===========================



      }
    ]);
}());
