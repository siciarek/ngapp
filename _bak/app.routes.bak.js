(function () {
    'use strict';

    angular.module('app')
            .config(['$routeProvider', '$locationProvider', routes]);

    function routes($routeProvider, $locationProvider) {

        var routing = {
            '/': {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/app/components/home/homeView.html'
            },
            '/info': {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/app/components/home/infoView.html'
            }
        };

        angular.forEach(routing, function (route, path) {
            $routeProvider.when(path, route);
        });

        $routeProvider.otherwise({redirectTo: '/'});
        $routeProvider.caseInsensitiveMatch = false;

        // Enable html5Mode for pushstate ('#'-less URLs)
        // List of browsers that supports this feature: http://caniuse.com/#feat=history
//        $locationProvider
//                .html5Mode({
//                    enabled: true,
//                    requireBase: false,
//                    rewriteLinks: true
//                });
    }

})();
