;(function (){

  'use strict';

  angular.module('myApp')
    .service('RegService', ['SERVER', '$http', '$cookies', '$state',
      function (SERVER, $http, $cookies, $state) {


        var endpoint = SERVER.URL;

        var getUserInfo = function () {
          return $cookies.getObject('currentUser');
        };

        //User Constructor
        var User = function (options) {
          this.email = options.email;
          this.password = options.password;
          this.username = options.username;
          this.first_name = options.first_name;
          this.last_name = options.last_name;
          this.address = options.address;
          this.phone_number = options.phone_number;

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
          this.allergies = options.allergies;
          this.conditions = options.conditions;
          this.medications = options.medications;
          this.blood_type = options.blood_type;
          this.insurance = options.insurance;
          this.religious_preference = options.religious_preference;
          this.notes = options.notes;
          this.relationship = options.relationship;
          this.alternate_number = options.alternate_number;

        };

        // Update headers with access token
        var updateConfig = function (user) {
          console.log(user);
          SERVER.CONFIG.headers['Access-Token'] = user.access_token;
        };


        this.checkUser = function () {
          var user = {
            access_token: $cookies.get('access_token')
          };
          if (user.access_token) {
            updateConfig(user);
          } else {
            console.log('NO ONE LOGGED IN');
            // $state.go('login');
          }
        };


        //Add User to SERVER and add new cookies
        this.addUser = function (user) {
            var x = new User(user);
            $http.post(endpoint + '/users', user).success( function(data) {
            $cookies.put('access_token', data.user.access_token);
            updateConfig(data.user);
            $state.go('login');
          });
        };

        //Login User and add new cookies
        this.loginUser =  function (user) {
          // console.log(user);
          $http.post(endpoint + '/users/login', user).success (function(data) {
          // console.log(data);
          $cookies.put('access_token', data.user.access_token);
          SERVER.CONFIG.headers['Access-Token'] = data.user.access_token;
          $cookies.putObject('currentUser', data.user);
          updateConfig(data.user);
          $state.go('dashboard');
          });
        };


        // Log out user and remove all cookies
        this.logoutUser = function (user) {
          $cookies.remove('access_token');
          $cookies.remove('currentUser');
          SERVER.CONFIG.headers['Access-Token'] = '';
          $state.go('login');
        };

        //Status Check, if user routes to login page and is logged in, route to dashboard
        this.statusCheck = function () {
          var user = $cookies.get('access_token') !==undefined;
          if (user){
            console.log('In if statement');
            $state.go('dashboard');
          }
        };

        // User is logged in
        this.loginTrue = function () {
          var user = $cookies.get('access_token');
          console.log('User is Logged In');
          return (user !== undefined) ? true : false;
        };

        // If user is not logged in and tries to navigate to dashboard inside app, routes home
        this.loginFalse = function () {
          var user = $cookies.get('access_token') !== undefined;
          if (!user && !$state.includes('reg')) {
            $state.go('login');
          }
        };


// Child Registration Setup startpoint
        this.userChildReg = function (x,y,child) {

          child.user_id = getUserInfo().id;
          console.log("This is the User's user id ", child.user_id);

          var kid = new Child (x,y,child);
          $http.defaults.headers.common = {'Access-Token' : $cookies.get('access_token')};
          console.log(kid);
          console.log('about to post to /children');
          $http.post(endpoint + '/children', child).success(function (data) {
            console.log('posted to /children and got back', data);
            console.log('Childs Info', data);
            // $cookies.putObject('currentUser', data);
            // $state.go('dashboard');
              var child_ID = _.filter(data, function(){
                return data.id;
              });
            console.log('child_ID', child_ID);
            // checkUser();
            console.log('about to post to', endpoint + '/child/'+child_ID+'/medical', 'and send:', x);
            $http.post(endpoint + '/child/'+ child_ID +'/medical', x)
            .success(function (data) { //took out data from parameters
              console.log('final change to child medical:', data);
            });
            console.log('about to post to', endpoint + '/child/'+child_ID+'/contacts', 'and send:', y);
            $http.post(endpoint + '/child/'+ child_ID +'/contacts', y)
            .success(function (data) { //took out data from parameters
              // parent.child = child;
              console.log('final change to Child EmergCont:', data);
            //   $cookies.putObject('currentUser', parent);
              $state.go('dashboard');
            });

          });
        };











      }
    ]);
}());



