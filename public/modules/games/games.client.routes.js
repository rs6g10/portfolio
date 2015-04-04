'use strict';

// Setting up route
angular.module('games').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // angular state routing
        $stateProvider.
            state('games', {
                url: '/games',
                templateUrl: 'modules/games/games.client.view.html'
            });
    }
]);