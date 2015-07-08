;(function (){

  'use strict';

  angular.module('myApp')
    .service('RegService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

        var endpoint = SERVER.URL + '/users';

        //Add User to SERVER
        this.addUser = function (user) {
            console.log(user);
            $http.post(endpoint, user).success( function(data) {
              console.log(data);
              console.log(data.user.access_token);
              $cookies.put('access_token', data.user.access_token);
              $state.go('login');
            });
          };




      }

    ]);

}());
