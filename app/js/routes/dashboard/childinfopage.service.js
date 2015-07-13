;(function (){

  'use strict';

  angular.module('myApp')
    .service('ChildInfoService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

        var endpoint = SERVER.URL;

        var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };


        //Child User Constructor
        var Child = function (options) {
          this.age = options.age;
          this.dob = options.dob;
          this.blood_type = options.blood_type;
          this.first_name = options.first_name;
          this.last_name = options.last_name;
          this.address = options.address;
          this.phone_number = options.phone_number;
          this.height = options.height;
          this.weight = options.weight;
        };

        // Update headers with access token
        var updateConfig = function (user) {
          console.log(user);
          SERVER.CONFIG.headers['Access-Token'] = user.access_token;
        };




      }
    ]);
}());
