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



        // //Get User Child Object
        // this.appendChildInfo = function (x,y,child) {
        //   $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};

        //   var user = getUserInfo();
        //   console.log('what is user?', user);
        //   var username = user.username;

        //   //user/:username/children
        //   return $http.get(endpoint + '/user/'+username+'/children').success( function(data) {

        //   });
        // };



// // Medical Info and Emergency Contact Setup startpoint
//           // Add Child's Medical Info

//         //Route Medical Info and Emergency Contact Info to each endpoint then update currentUser cookies
//         this.userMedInfo =  function (x,y) {

//           // In this file - build a function to get the current user object (or get it from the cookie yourself)
//           // Grab the ID out of the user object
//           // Build your URL .... '/child/' + obj.id + '/medical'

//           var user = getUserInfo();
//           var id = user.id;
//           console.log(user);

//           $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};
//           $http.post(endpoint + '/child/'+id+'/medical', x);
//           $http.post(endpoint + '/child/'+id+'/contacts', y)
//                .success(function (data) {
//                  $cookies.putObject('currentUser', data.user);
//                  $state.go('dashboard');
//           });
//         };

//         //Edit Child's Medical Infomation

//         this.editChildMedInfo = function (x,y) {

//           var user = getUserInfo();
//           var id = user.id;
//           console.log(user);

//           $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};
//           $http.put(endpoint + '/child/'+id+'/medical', x);
//           $http.put(endpoint + '/child/'+id+'/contacts', y)
//                .success(function (data) {
//                  $cookies.putObject('currentUser', data.user);
//                  $state.go('dashboard');
//           });


//         };

// // Medical Info and Emergency Contact Setup endpoint


      }
    ]);
}());
