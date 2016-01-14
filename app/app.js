'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider

      .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        redirectTo: '/login'
      })
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
      .otherwise({redirectTo: '/login'});
}]);
