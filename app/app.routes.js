angular.module('app')
        .config(['$routeProvider', '$locationProvider', routes]);

function routes($routeProvider, $locationProvider) {
    var routing = {
        '/': {
            controller: 'HomeController',
            templateUrl: '/app/components/home/homeView.html'
        },
        '/info': {
            controller: 'HomeController',
            templateUrl: '/app/components/home/infoView.html'
        }
    };

    angular.forEach(routing, function (route, path) {
        $routeProvider.when(path, route);
    });

    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider.caseInsensitiveMatch = false;
}

