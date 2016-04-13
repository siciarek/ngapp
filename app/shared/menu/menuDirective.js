(function () {
    'use strict';

    angular.module('app').directive('menu', menu);

    function menu() {
        return {
            templateUrl: '/app/shared/menu/menuView.html',
            restrict: 'E',
            replace: true
        };
    }
})();
