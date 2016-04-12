angular.module('app')
    .controller('HomeController', ['$scope', '$rootScope', '$interval', homeController]);

function homeController ($scope, $rootScope, $interval) {

    $scope.data = {
        name: 'Zażółć gęślą jaźń',
        items: [
            {
                id: 1,
                name: 'Zażółć'
            },
            {
                id: 2,
                name: 'Gęślą'
            },
            {
                id: 3,
                name: 'Jaźń'
            }
        ]
    };

}
