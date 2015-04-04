'use strict';

// Setting up route
angular.module('d3').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('d3', {
                url: '/d3',
                templateUrl: 'modules/d3/d3.client.view.html'
            });
    }
]);