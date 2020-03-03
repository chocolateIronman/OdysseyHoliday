(
    function(){
        'use strict';

        angular
            .module('mainpagejs')
            .controller('mainpageCtrl',control);

        control.$inject=[
            '$state'
        ];

        function control(
            $state
        ) {
            var vm=angular.extend(this, {

            });

            return vm;
        }
    }
)();