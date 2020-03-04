(
    function() {
        'use strict';

        const module = angular.module('faqjs', []);

        module.config(function($stateProvider,) {

            $stateProvider.state('faq', {
                cache: false,
                url: '/faq',
                templateUrl: 'scripts/states/faq.html',
                controller: 'faqCtrl as vm'
            });

            
        });
    }
)();
