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

        //Do API call to retrieve child information
        var getChildDashInfo = function (data) {
          return $http.get(endpoint + '/child/:id');

        };


        //Get User Child Object
        this.appendChildInfo = function (child) {
         RegService.checkUser();

            childID = _.filter(child, function(id){
                return child.id;
            });
            console.log("These are the children's IDs: ", child);

          $http.get(endpoint + '/user/'+username+'/children', child);


          // user/:username/children
          // run functions to render children array
          // run a function to render each invidual child's id using a loop



        };






      }
    ]);
}());
