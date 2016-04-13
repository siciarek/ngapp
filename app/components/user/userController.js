(function () {
    'use strict';

    angular.module('app')
            .controller('UserController', ['userService', '$stateParams', userController]);

    function userController(userService, $stateParams) {
        /*jshint validthis:true */
        var vm = this;
        vm.list = userService.getList();
        vm.item = null;

        if ($stateParams.hasOwnProperty('id')) {
            vm.item = userService.getDetails($stateParams.id);
        }
    }
})();
