(function () {
    'use strict';

    angular.module('app', ['ngSanitize', 'ui.router']);

    angular.module('app')
            .config(['$locationProvider', function ($locationProvider) {
                    // Enable html5Mode for pushstate ('#'-less URLs)
                    // List of browsers that supports this feature: http://caniuse.com/#feat=history
                    $locationProvider
                            .html5Mode({
                                enabled: true,
                                requireBase: false,
                                rewriteLinks: true
                            });
                }]);

    angular.module('app').run(['$rootScope', function ($rootScope) {

            // UI-Router scrolling top bug workaround:
            $rootScope
                    .$on('$viewContentLoaded', function () {
                        jQuery('html, body').animate({ scrollTop: 0 }, 100);
                    });

            $rootScope.app = {
                name: 'NGAPP',
                description: 'AngularJS (commonly referred to as "Angular" or "Angular.js") is an open-source web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.'
            };
        }]);
})();
