(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('names',{
                url: '/names',
                templateUrl: 'app/names/names.html',
                controller: 'nameController',
                controllerAs: 'names'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
