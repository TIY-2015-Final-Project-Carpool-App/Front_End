(function() {
  'use strict';

  angular.module('myApp')

  .controller('DashboardCtrl', ['$scope', '$http', '$state', 'DashboardService', 'ChildInfoService',
   function($scope, $http, $state, DashboardService, ChildInfoService) {

     console.log('This is the DashboardCtrl');
// //  Calendar Code Starts Here
//
//      $scope.uiConfig = {
//          calendar:{
//            contentHeight    : 500,
//            aspectRatio      : 1.8,
//            editable         : true,
//            header:{
//              left           : 'title',
//              center         : '',
//              right          : 'today prev,next'
//          },
//            dayClick         : $scope.alertEventOnClick,
//            eventDrop        : $scope.alertOnDrop,
//            eventResize      : $scope.alertOnResize,
//            defaultView      : 'month'
//          }
//        };
//
// //  Calendar Code Ends Here
//
//     // Add all events needed on calendar in this Array
//      $scope.eventSource = [{
//        events     : $scope.events,
//        color      :'purple',
//        textColor  :'white'
//      }];
//
//
//
// // Map Code Starts Here
//
//     //  var map = L.map('map').setView([33.7550, -84.3900], 9);
//     //
//     //  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmhrdGtzaG4iLCJhIjoiYzI2ODZmYzcyZWM3ZjFiN2UyZDUyMGY5NTY3MGIxYmQifQ.Pqgu-9-i0rdp3DAPA8E9Bg', {
//     //     attribution  : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     //     maxZoom      : 18,
//     //     id           : 'bhktkshn.9df1076c',
//     //     accessToken  : 'your.mapbox.public.access.token'
//     // }).addTo(map);
//
//         // GET MAP DATA
//     var data = [
//       {
//         "address": "215 Pryor Street Southwest, Atlanta, GA 30303, USA",
//         "latitude": 33.7488366,
//         "longitude": -84.393001
//       },
//       {
//         "address": "1016 Princeton Walk Northeast, Marietta, GA 30068, USA",
//         "latitude": 33.9756022,
//         "longitude": -84.4284237
//       },
//       {
//         "address": "3009 Oak Park Circle, Atlanta, GA 30324, USA",
//         "latitude": 33.8259986,
//         "longitude": -84.33533489999999
//       }
//     ];
//
//      var waypoints = data;
//         // var waypoints = function (trip){
//         //   $http.get(endpoint, trip, LOCALBUZZ.CONFIG).success( function() {
//         //         console.log(trip);
//         //       });
//         //   };
//      var markers = [];
//         for(var idx=0; idx< waypoints.length; idx++) {
//           var marker = L.marker([waypoints[idx].latitude,waypoints[idx].longitude]).addTo(map);
//           marker.bindPopup(waypoints[idx].address).openPopup();
//           markers.push(marker);
//         }
//
//  //Map Code Ends Here
   }
  ]);
}());
