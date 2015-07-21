;(function (){

  'use strict';

  angular.module('myApp')
    .service('CarpoolService', ['SERVER', '$http', '$cookies', '$state', '$compile','$q',
      function (SERVER, $http, $cookies, $state, $compile, $q) {

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

      var Appointment = function (options) {
        this.start            = options.start;
        this.title            = options.title;
        this.origin           = options.origin;
        this.destination      =  options. destination;
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


      // Get carpool ID .then post /carpool/:id/appointments
      var user = getUserInfo();
      console.log('user ' + user);
      var user_id = user.user_id;
      console.log('user_id ' + user_id);
      var carpool_id = $http.get(endpoint + '/carpool/'+user_id+'', SERVER.CONFIG);
      console.log('carpool_id ' + carpool_id);
      // $http.post(endpoint + '/carpool/:id/appointments', appointment, SERVER.CONFIG)

      // this.addAppointment = function (appointment) {

      // }




      // ===========================
      // Create an Appointment End
      // ===========================



      }
    ]);
}());
