(function () {
    'use strict';

    angular.module('app')
            .service('homeService', [homeService]);

    function homeService() {

        /*jshint validthis:true */
        var vm = this;

        vm.getData = function () {
            return  {
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
                    },
                    {
                        id: 4,
                        name: 'Lorem'
                    },
                    {
                        id: 5,
                        name: 'Ipsum'
                    },
                    {
                        id: 6,
                        name: 'Dolor'
                    },
                    {
                        id: 7,
                        name: 'Sit'
                    }
                ]
            };
        };
    }
})();
