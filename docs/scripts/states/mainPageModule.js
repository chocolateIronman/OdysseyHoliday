(
    function(){
        'use strict';

        const module = angular.module('mainpagejs',[
            'ui.router',
            'ngAnimate'
        ]);

        module.config(function($stateProvider,$urlRouterProvider){
            $stateProvider.state('mainpage',{
                cache:false,
                url:'/home',
                templateUrl:'scripts/states/mainpage.html',
                controller:'mainpageCtrl as vm'
            });

            $urlRouterProvider.otherwise('/home');
        });
    }
)();