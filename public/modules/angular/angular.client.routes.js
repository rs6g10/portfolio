'use strict';

// Setting up route
angular.module('angular').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('angular', {
                url: '/angular',
                templateUrl: 'modules/angular/angular.client.view.html'
            });
    }
]);