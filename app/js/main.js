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
      URL: 'https://ancient-sea-7341.herokuapp.com',
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
      //==============================
      // Registration and Login Views
      //==============================

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
          url: '/medinfo/:childId',
          templateUrl:'js/routes/medinfo/medinfo.tpl.html',
          controller:'MedInfoCtrl'
        })

        //====================================
        // Registration and Login Views Ends
        //====================================


        //================
        // Dashboard
        //================

        // .state('dashboard', {
        //   url: '/dashboard',
        //   templateUrl:'js/routes/dashboard/childinfopage.tpl.html',
        //   controller:'DashboardCtrl'
        // })

        //=================
        // Dashboard Ends
        //=================


        .state('editInfo', {
          url: '/edituserinfo',
          templateUrl:'js/routes/profile/editprofile.tpl.html',
          controller:'ProfileCtrl'
        });

    }]);

}());




// views: {
//             'children': {
//               templateUrl: 'js/routes/dashboard/childinfopage.tpl.html',
//               controller:'DashboardCtrl'
//             }