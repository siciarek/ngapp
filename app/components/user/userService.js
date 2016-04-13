(function () {
    'use strict';

    angular.module('app')
            .service('userService', [userService]);

    function userService() {

        /*jshint validthis:true */
        var vm = this;
        var items = [
            {
                "id": 1,
                "gender": "male",
                "firstName": "Albert",
                "lastName": "Einstein",
                "dateOfBirth": "1879-03-14",
                "email": "albert.einstein@gmail.com"
            },
            {
                "id": 2,
                "gender": "female",
                "firstName": "Maria",
                "lastName": "Skłodowska-Curie",
                "dateOfBirth": "1867-11-07",
                "email": "m.sklodowska@gmail.com"
            }
        ];

        vm.getDetails = function(id) {
            var item = null;

            angular.forEach(items, function(e, i) {
                if(e.id === parseInt(id)) {
                    item = e;
                    return;
                }
            });

            return item;
        };

        vm.getList = function () {
            return  {
                name: 'User list',
                items: items
            };
        };
    }
})();
