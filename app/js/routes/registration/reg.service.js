;(function (){

  'use strict';

  angular.module('myApp')
    .service('RegService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

        var endpoint = SERVER.URL;

        var isLoggedIn;

        var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };



        //Add User to SERVER and add new cookies
        this.addUser = function (user) {
            // console.log(user);
            $http.post(endpoint + '/users', user).success( function(data) {
            // console.log(data);
            $cookies.put('access_token', data.user.access_token);
            updateConfig(data.user);
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
          updateConfig(data.user);
          $state.go('dashboard');
          });
        };

        // Update headers with access token
        var updateConfig = function (user) {
          console.log(user);
          SERVER.CONFIG.headers['Access-Token'] = user.access_token;
        };

        // Log out user and remove all cookies
        this.logoutUser = function (user) {
          $cookies.remove('access_token');
          $cookies.remove('currentUser');
          SERVER.CONFIG.headers['Access-Token'] = '';
          $state.go('login');
        };

        // If visitor routes to login page and is logged in, route to dashboard
        this.loginTrue = function () {
          isLoggedIn = $cookies.get('access_token') !== undefined;
          if (isLoggedIn) {
            $state.go('dashboard');
          }
        };

        // If user is not logged in and tries to navigate inside app, routes home
        this.loginFalse = function () {
          isLoggedIn = $cookies.get('access_token') !== undefined;
          if (isLoggedIn !== true) {
            $state.go('login');
          }
        };

        // Child Registration Setup startpoint
        this.userChildReg = function (child) {
          $http.post(endpoint +'/children', child)
          .success(function (data) {
            $cookies.putObject('currentUser', data.user);
            $state.go('dashboard');
          });
        };



        // Child Registration Setup endpoint


// Medical Info and Emergency Contact Setup startpoint

        //Route Medical Info and Emergency Contact Info to each endpoint then update currentUser cookies
        this.userMedInfo =  function (x,y) {

          // In this file - build a function to get the current user object (or get it from the cookie yourself)
          // Grab the ID out of the user object
          // Build your URL .... '/child/' + obj.id + '/medical'

          var user = getUserInfo();
          var id = user.id;

          $http.post(endpoint + '/child/'+id+'/medical', x);
          $http.post(endpoint + '/child/'+id+'/contacts', y)
               .success(function (data) {
                 $cookies.putObject('currentUser', data.user);
                 $state.go('dashboard');
          });
        };
// Medical Info and Emergency Contact Setup endpoint


      }
    ]);
}());
