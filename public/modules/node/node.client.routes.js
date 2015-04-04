'use strict';

// Setting up route
angular.module('node').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('node', {
                url: '/node',
                templateUrl: 'modules/node/node.client.view.html'
            });
    }
]);