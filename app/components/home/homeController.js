(function () {
    'use strict';

    angular.module('app')
            .controller('HomeController', ['homeService', homeController]);

    function homeController(homeService) {
        /*jshint validthis:true */
        var vm = this;
        vm.data = homeService.getData();
    }
})();
