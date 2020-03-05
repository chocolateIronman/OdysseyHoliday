(
    function () {
        'use strict';

        angular
            .module('csrjs')
            .controller('csrCtrl',control);

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
