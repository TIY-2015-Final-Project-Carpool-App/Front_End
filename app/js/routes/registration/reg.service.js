;(function (){

  'use strict';

  angular.module('myApp')
    .service('RegService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

        var endpoint = SERVER.URL + '/users';

        //Add User to SERVER and add new cookies
        this.addUser = function (user) {
            // console.log(user);
            $http.post(endpoint, user).success( function(data) {
            // console.log(data);
            $cookies.put('access_token', data.user.access_token);
            $state.go('login');
          });
        };

        //Login User and add new cookies
        this.loginUser =  function (user) {
          console.log(user);
          $http.post(endpoint, user).success (function(data) {
          console.log(data);
          $cookies.put('access_token', data.user.access_token);
          $cookies.putObject('currentUser', data.user);
          $state.go('dashboard');
          });
        };

        // Log out user and remove all cookies
        this.logoutUser = function (user) {
          $cookies.remove('access_token');
          $cookies.remove('currentUser');
          SERVER.CONFIG.headers['Access-Token'] = '';
          $state.go('login');
        };




      }

    ]);

}());
