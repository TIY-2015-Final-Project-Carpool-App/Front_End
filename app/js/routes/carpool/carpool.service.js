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

      // this.addNewInvite = function() {
      //           var inviteArray = [];

      //           var num = $scope.invites.length + 1;

      //           $scope.invites.push({'invite': num });

      //           // inviteArray.push( _.pluck(addNewInvite, 'email'));
      //           _.pluck(addNewInvite, 'email');

      //           return inviteArray;


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


      }
    ]);
}());
