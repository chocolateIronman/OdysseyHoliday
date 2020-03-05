angular.module('starter', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'mainpagejs',
    'faqjs',
    'aboutusjs',
    'csrjs',
    'ngResource'
])
    
    .run(function ($state, $rootScope) {
        $rootScope.$on('$stateChangeError', function (event) {
            event.preventDefault();

            //$state.get('about').error={code: 123, description: 'Exception stack trace'}
            //return $state.go('about');
        });
    });
