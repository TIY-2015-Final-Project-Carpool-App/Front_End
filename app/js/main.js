(function() {
  'use strict';
  var app = angular
    .module('myApp', [
      'ngAnimate',
      'ngCookies',
      // 'ngMessages',
      'ngMaterial',
      'ui.router'
    ]);
    app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // $urlRouterProvider.otherwise('/');
      $stateProvider

        .state('login', {
          url: '/',
          templateUrl:'js/routes/login/login.tpl.html',
          controller: 'LoginCtrl'
        })
        .state('reg', {
          url: '/registration',
          templateUrl:'js/routes/registration/reg.tpl.html',
          controller: 'RegCtrl'
        })
        .state('medInfo', {
          url: '/medinfo',
          templateUrl:'js/routes/medinfo/medinfo.tpl.html',
          controller:'MedInfoCtrl'
        });

    }]);

}());
