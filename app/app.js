'use strict';

// Declare app level module which depends on views, and components
angular.module('scabbit', [
    'ngRoute',
    'scabbit.login',
    'scabbit.signup',
    'scabbit.signupDetails',
    'scabbit.view1',
    'scabbit.view2',
    'scabbit.version',
    'ngMaterial',
    'ngMessages'


])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        })
        .when('/', {
            redirectTo: '/login'
        })
        .when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupCtrl'
        })
        .when('/signupDetails', {
            templateUrl: 'signupDetails/signupDetails.html',
            controller: 'SignupDetailsCtrl'
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

angular.module('directives', [
        'scabbit.directives.pwCheck'
    ]);
