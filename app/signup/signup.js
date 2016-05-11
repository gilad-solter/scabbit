/**
 * Created by Gilad on 14/1/16.
 */

'use strict';

angular.module('scabbit.signup', [])

    .controller('SignupCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.submit = function(){

            console.log('submit signup1:', $scope.email, $scope.password, $scope.passwordVer);
            console.log('valid: ', $scope.signupForm.$valid);

            $location.path('/signupDetails');
        };

    }]);