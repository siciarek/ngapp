var app = angular.module('app', ['ngSanitize', 'ngRoute']);

app.run(function ($rootScope) {

    $rootScope.types = {
        gender: [
            {
                id: 'unknown', name: 'Unknown'
            },
            {
                id: 'male', name: 'Male'
            },
            {
                id: 'female', name: 'Female'
            }
        ]
    };

    $rootScope.weatherReportService = {
        url: 'http://localhost:8000/services/weather-report.php',
        polingInterval: 5
    };

    $rootScope.userService = {
        url: 'http://localhost:8000/services/user.php',
        polingInterval: 0
    };

    $rootScope.now = new Date();

    $rootScope.name = 'AngularJS App';

    $rootScope.description = 'AngularJS (commonly referred to as "Angular" or "Angular.js") is an open-source web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.';
});

app.config(['$locationProvider', function ($locationProvider) {
        // Enable html5Mode for pushstate ('#'-less URLs)
        // List of browsers that supports this feature: http://caniuse.com/#feat=history
        $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false,
                    rewriteLinks: true
                });
    }]);
