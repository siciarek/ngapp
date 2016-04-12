angular.module('app')
    .controller('HomeController', ['homeService', '$scope', homeController]);

function homeController (homeService, $scope) {

    $scope.data = homeService.getData();
}
