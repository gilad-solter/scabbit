/**
 * Created by Gilad on 14/1/16.
 */

'use strict';

angular.module('scabbit.login', [])
    .controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.submit = function(){
            console.log('login:', $scope.email, $scope.password);
            $location.path('/');
        };

    }]);