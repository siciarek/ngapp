(function () {
    'use strict';

    angular.module('app')
            .config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider
                        .state('home', {
                            url: '/',
                            controller: 'HomeController',
                            templateUrl: '/app/components/home/homeView.html'
                        })
                        .state('info', {
                            url: '/info',
                            templateUrl: '/app/components/home/infoView.html'
                        })
                        .state('contact', {
                            url: '/contact',
                            templateUrl: '/app/components/home/contactView.html'
                        });

            });

})();
