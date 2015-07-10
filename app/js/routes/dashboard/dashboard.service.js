;(function (){

  'use strict';

  angular.module('myApp')
    .service('DashboardService', ['SERVER', '$http', '$cookies', '$state', '$compile',
      function (SERVER, $http, $cookies, $state, $compile) {

      console.log('This is the DashboardService');


      }
    ]);
}());
