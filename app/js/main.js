(function() {
  'use strict';
  var app = angular
    .module('myApp', [
      'ngAnimate',
      'ngCookies',
      // 'ngMessages',
      'ngMaterial',
      'ui.router',
      'ui.calendar'
    ]);
    app.constant('SERVER', {
      URL: 'https://ancient-sea-7341.herokuapp.com/',
      CONFIG: {
        headers:{
          'Access-Token' : ''
        }
      }
    });
    app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // $urlRouterProvider.otherwise('/');
      $stateProvider

        .state('login', {
          url: '/',
          templateUrl:'js/routes/login/login.tpl.html',
          controller: 'LoginCtrl'
        })
        .state('logoutUser', {
          url: '/',
          templateUrl:'js/routes/login/login.tpl.html',
          controller: 'LoginCtrl'
        })
        .state('reg', {
          url: '/registration',
          templateUrl:'js/routes/registration/reg.tpl.html',
          controller: 'RegCtrl'
        })
        .state('childReg', {
          url: '/registration',
          templateUrl:'js/routes/registration/childreg.tpl.html',
          controller: 'RegCtrl'
        })
        .state('medInfo', {
          url: '/medinfo',
          templateUrl:'js/routes/medinfo/medinfo.tpl.html',
          controller:'MedInfoCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl:'js/routes/dashboard/dashboard.tpl.html',
          controller:'DashboardCtrl'
        })
        .state('editInfo', {
          url: '/edituserinfo',
          templateUrl:'js/routes/profile/editprofile.tpl.html',
          controller:'ProfileCtrl'
        });

    }]);

}());
