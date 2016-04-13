angular.module('app').directive('menu', function () {
    return {
        templateUrl: '/app/shared/menu/menuView.html',
        restrict: 'E',
        replace: true
    };
});
