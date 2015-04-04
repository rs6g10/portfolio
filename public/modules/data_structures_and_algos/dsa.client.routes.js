'use strict';

// Setting up route
angular.module('dsa').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('dsa', {
                url: '/dsa',
                templateUrl: 'modules/data_structures_and_algos/dsa.client.view.html'
            });
    }
]);