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
                    },
                    {
                        id: 8,
                        name: 'Amet'
                    },
                    {
                        id: 9,
                        name: 'John'
                    },
                    {
                        id: 10,
                        name: 'Paul'
                    },
                    {
                        id: 11,
                        name: 'George'
                    },
                    {
                        id: 12,
                        name: 'Ringo'
                    }
                ]
            };
        };
    }
})();
