angular.module('app').directive('notificationInfo', function () {
    return {
        templateUrl: 'templates/notification/info.html',
        restrict: 'E',
        replace: true
    };
});

angular.module('app').directive('notificationError', function () {
    return {
        templateUrl: 'templates/notification/error.html',
        restrict: 'E',
        replace: true
    };
});

angular.module('app').directive('list', function () {
    return {
        templateUrl: 'templates/list.html',
        restrict: 'E',
        replace: true
    };
});

