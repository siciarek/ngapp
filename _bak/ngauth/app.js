(function () {

    function authInterceptor(API, auth) {
        return {
            // automatically attach Authorization header
            request: function (config) {

                var token = auth.getToken();

                if (config.url.indexOf(API) === 0 && token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            },
            // If a token was sent back, save it
            response: function (res) {

                var token = res.data ? res.data.token : null;

                if (token) {
                    auth.saveToken(token);
                }

                return res;
            }
        }
    }

    function authService($window) {
        var vm = this;

        // Add JWT methods here

        vm.parseJwt = function (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        };

        vm.saveToken = function (token) {
            $window.localStorage['JWT'] = token;
        };

        vm.getToken = function () {
            return $window.localStorage['JWT'];
        };

        vm.isAuthed = function () {
            var token = vm.getToken();
            if (token) {
                var params = vm.parseJwt(token);
                return Math.round(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        };

        vm.logout = function () {
            $window.localStorage.removeItem('JWT');
        };
    }

    function userService($http, API, auth) {
        var vm = this;

        vm.getQuote = function () {
            return $http.get(API + '/auth/quote')
        };

        // add authentication methods here

        vm.register = function (username, password) {
            return $http
                    .post(API + '/auth/register', {
                        username: username,
                        password: password
                    });
        };

        vm.login = function (username, password) {
            return $http
                    .post(API + '/auth/login', {
                        username: username,
                        password: password
                    });
        };
    }

// We won't touch anything in here

    function MainCtrl(user, auth) {
        var vm = this;

        function handleRequest(res) {
            vm.message = res.data ? res.data.message : null;
        }

        vm.login = function () {
            user.login(vm.username, vm.password).then(handleRequest, handleRequest);
        };

        vm.register = function () {
            user.register(vm.username, vm.password).then(handleRequest, handleRequest)
        };

        vm.getQuote = function () {
            user.getQuote().then(handleRequest, handleRequest)
        };

        vm.logout = function () {
            auth.logout && auth.logout()
        };

        vm.isAuthed = function () {
            return auth.isAuthed ? auth.isAuthed() : false
        };
    }

    angular.module('app', [])
            .factory('authInterceptor', authInterceptor)
            .service('user', userService)
            .service('auth', authService)
            .constant('API', 'http://localhost:3002')
            .config(function ($httpProvider) {
                $httpProvider.interceptors.push('authInterceptor');
            })
            .controller('Main', MainCtrl)
})();
