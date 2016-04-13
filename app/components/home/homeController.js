(function () {
    'use strict';

    angular.module('app')
            .controller('HomeController', ['homeService', '$scope', homeController]);

    function homeController(homeService, $scope) {
        /*jshint validthis:true */
        var vm = this;
        vm.data = homeService.getData();
    }
})();
