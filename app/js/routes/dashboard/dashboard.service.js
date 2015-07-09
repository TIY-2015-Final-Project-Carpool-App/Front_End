;(function (){

  'use strict';

  angular.module('myApp')
    .service('DashboardService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {

      console.log('This is the DashboardService');

      }
    ]);
}());
