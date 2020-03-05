(
    function () {
        'use strict';

        angular
            .module('aboutusjs')
            .controller('aboutusCtrl',control);

        control.$inject = [
            '$state'
        ];

        function control(
            $state
        ) {
            var vm = angular.extend(this, {

            });

            return vm;
        }
       
    }
)();
