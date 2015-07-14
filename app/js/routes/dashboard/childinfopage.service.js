;(function (){

  'use strict';

  angular.module('myApp')
    .service('ChildInfoService', ['SERVER', '$http', '$cookies', '$state', '$rootScope',
      function (SERVER, $http, $cookies, $state, $rootScope) {

        var endpoint = SERVER.URL;

        var getUserInfo = function () {
          console.log('currentuser', $cookies.getObject('currentUser'));
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

        //Get User Child Object
        this.appendChildInfo = function (child) {
          $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};

          var user = getUserInfo();
          var username = user.username;

          //user/:username/children
          return $http.get(endpoint + '/user/'+username+'/children').success( function(data) {
            //$rootScope.$broadcast('ChildrenInfo', data);
          });
        };



      }
    ]);
}());
