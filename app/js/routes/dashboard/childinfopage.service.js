;(function (){

  'use strict';

  angular.module('myApp')
    .service('ChildInfoService', ['SERVER', '$http', '$cookies', '$state', '$rootScope',
      function (SERVER, $http, $cookies, $state, $rootScope) {

        var endpoint = SERVER.URL;

        //Get User info from cookies
        var getUserInfo = function () {
          console.log('currentuser', $cookies.getObject('currentUser'));
          return $cookies.getObject('currentUser');
        };

        // //Do API call to retrieve child information
        // var getChildDashInfo = function () {
        //   return $http.get(endpoint + '/child/:id');

        // };


        // //Get User Child Object
        // this.appendChildInfo = function (x,y,child) {
        //   $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};

        //   var user = user.userusername

        //   var children = $http.get(endpoint + '/user/'+username+'/children', child);
        //   var id = child.id;

        //   // user/:username/children
        //   // run functions to render children array
        //   // run a function to render each invidual child's id using a loop

        //     return $http.get(endpoint + '/user/'+username+'/children', child).success(function (contact, medical){

        //       var childContact = _.filter
        //       var childMedical = _.filter
        //     })
        //     return $http.get(endpoint + '/child/'+id+'/contacts', y);
        //     return $http.get(endpoint + '/child/'+id+'/medical', x);

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
