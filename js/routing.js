angular.module('app')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

                $routeProvider.caseInsensitiveMatch = false;

                var routing = {
                    '/': {
                        controller: 'DefaultController',
                        templateUrl: '/views/Default/home.html'
                    },
                    '/info': {
                        controller: 'DefaultController',
                        templateUrl: '/views/Default/info.html'
                    },
                    '/contact': {
                        controller: 'DefaultController',
                        templateUrl: '/views/Default/contact.html'
                    },
                    '/users': {
                        controller: 'UserController',
                        templateUrl: '/views/User/list.html'
                    },
                    '/users/:id': {
                        controller: 'UserController',
                        templateUrl: '/views/User/details.html'
                    }
                };

                angular.forEach(routing, function (route, path) {
                    $routeProvider.when(path, route);
                });

                $routeProvider.otherwise({redirectTo: '/'});
            }]);
