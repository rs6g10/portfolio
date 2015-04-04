'use strict';

// Setting up route
angular.module('variables.configuration').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
            state('variablesConfig', {
                url: '/variablesConfig',
                templateUrl: 'modules/variables.configuration/variables.configuration.client.view.html'
            });
    }
]);