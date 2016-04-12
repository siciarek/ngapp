angular.module('app')
    .config(['$routeProvider', '$locationProvider', routes]);


function routes($routeProvider, $locationProvider) {

                $routeProvider.caseInsensitiveMatch = false;

                var routing = {
                    '/': {
                        controller: 'HomeController',
                        templateUrl: '/app/components/home/homeView.html'
                    }
               };

                angular.forEach(routing, function (route, path) {
                    $routeProvider.when(path, route);
                });

                $routeProvider.otherwise({redirectTo: '/'});
            }

