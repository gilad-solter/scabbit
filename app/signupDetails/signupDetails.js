/**
 * Created by Gilad on 14/1/16.
 */

'use strict';

angular.module('scabbit.signupDetails', [])

    .controller('SignupDetailsCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.prefixes = ['050', '051', '052', '053', '054', '055', '056', '057', '058', '059'];

        $scope.submit = function(){
          console.log('signupDetails:', $scope.firstName, $scope.lastName, $scope.phone, $scope.phonePrefix);
            $location.path('/view1');
        };


    }]);