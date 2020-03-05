(
    function(){
        'use strict';

        const module = angular.module('aboutusjs',[
            'ui.router',
            'ngAnimate'
        ]);

        module.config(function($stateProvider,$urlRouterProvider){
            $stateProvider.state('aboutus',{
                cache:false,
                url:'/about_us',
                templateUrl:'scripts/states/aboutus.html',
                controller:'aboutusCtrl as vm'
            });

            
        });
    }
)();