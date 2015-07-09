;(function (){

  'use strict';

  angular.module('myApp')
    .service('RegService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

        var endpoint = SERVER.URL;

        var isLoggedIn;

        // Update headers with access token
        var _updateConfig = function (user) {
          SERVER.CONFIG.headers['Access-Token'] = user.access_token;
        };

        //Add User to SERVER and add new cookies
        this.addUser = function (user) {
            // console.log(user);
            $http.post(endpoint + '/users', user).success( function(data) {
            // console.log(data);
            $cookies.put('access_token', data.user.access_token);
            $state.go('login');
          });
        };

        //Login User and add new cookies
        this.loginUser =  function (user) {
          // console.log(user);
          $http.post(endpoint + '/users/login', user).success (function(data) {
          // console.log(data);
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

        // If visitor routes to login page and is logged in, route to dashboard
        this.homeCheckLogin = function () {
          isLoggedIn = $cookies.get('access_token') !== undefined;
          if (isLoggedIn) {
            $state.go('dashboard');
          }
        };

        // If user is not logged in and tries to navigate inside app, routes home
        this.checkLogin = function () {
          isLoggedIn = $cookies.get('access_token') !== undefined;
          if (isLoggedIn !== true) {
            $state.go('login');
          }
        };
      }
    ]);
}());
