(
    function(){
        'use strict';

        const module = angular.module('csrjs',[
            'ui.router',
            'ngAnimate'
        ]);

        module.config(function($stateProvider,$urlRouterProvider){
            $stateProvider.state('csr',{
                cache:false,
                url:'/csr',
                templateUrl:'scripts/states/csr.html',
                controller:'csrCtrl as vm'
            });

            
        });
    }
)();