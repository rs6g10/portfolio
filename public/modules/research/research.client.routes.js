'use strict';

// Setting up route
angular.module('research').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('research', {
                url: '/research',
                templateUrl: 'modules/research/research.client.view.html'
            });
    }
]);