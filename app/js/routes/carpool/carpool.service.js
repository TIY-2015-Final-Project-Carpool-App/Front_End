;(function (){

  'use strict';

  angular.module('myApp')
    .service('CarpoolService', ['SERVER', '$http', '$cookies', '$state', '$compile',
      function (SERVER, $http, $cookies, $state, $compile) {

      console.log('This is the CarpoolService');

      var endpoint = SERVER.URL;

      var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };

      var Carpool = function (options) {
        this.title        = options.title;
        this.description  = options.description;
        this.invite       = options.invite;
      }

      // this.addNewInvite = function() {
      //           var inviteArray = [];

      //           var num = $scope.invites.length + 1;

      //           $scope.invites.push({'invite': num });

      //           // inviteArray.push( _.pluck(addNewInvite, 'email'));
      //           _.pluck(addNewInvite, 'email');

      //           return inviteArray;


      this.addCP = function (trip, invite) {

            user.user_id = getUserInfo().id;
            console.log("This is the Child's user id" + ' ' + user.user_id);

            var CP = new Carpool(trip, invite);

            $http.post(endpoint + '/carpools', trip).success(function(){

              var id = cpAdmin.user_id;

              $http.post(endpoint + '/carpool/'+ id +'', invite);
          });
        };


      }
    ]);
}());

// /carpool/:id