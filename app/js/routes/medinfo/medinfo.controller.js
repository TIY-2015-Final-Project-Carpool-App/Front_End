(function() {
  'use strict';

  angular.module('myApp')

  .controller('MedInfoCtrl', ['$scope', '$http', '$state', 'RegService',
   function($scope, $http, $state, RegService){


    $scope.userMedInfo = function(x, y) {
      console.log(x);
      console.log(y);
      //RegService.userMedInfo(x,y);
    };

    }
  ]);
}());
