(function () {
    'use strict';

    angular.module('app')
            .config(['$stateProvider', '$urlRouterProvider', routes]);

    function routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('userList', {
                    url: '/users',
                    controller: 'UserController as user',
                    templateUrl: '/app/components/user/listView.html'
                })
                .state('userDetails', {
                    url: '/users/{id:[1-9]\\d*}',
                    controller: 'UserController as user',
                    templateUrl: '/app/components/user/detailsView.html'
                })
                .state('home', {
                    url: '/',
                    views: {
                        '': {
                            controller: 'HomeController as home',
                            templateUrl: '/app/components/home/homeView.html'
                        }
                    }
                })
                .state('info', {
                    url: '/info',
                    templateUrl: '/app/components/home/infoView.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: '/app/components/home/contactView.html'
                });
    }

})();
