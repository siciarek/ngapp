angular.module('app').controller('UserController', ['$scope', '$interval', '$routeParams', 'User',
    function ($scope, $interval, $routeParams, User) {

        var __init = function () {
            return User.fetchList()
                    .then(
                            function (data) {
                                $scope.items = data;
                                $scope.selectItem = function (id) {
                                    id = id || null;

                                    $scope.item = User.getOne(id);
                                };

                                $scope.removeItem = function (id) {
                                    id = id || null;
                                    User.removeOne(id);
                                };

                                $scope.saveUserData = function (form) {
                                    User.save($scope.item)
                                            .then(
                                                    function (data) {
                                                        $scope.selectItem();
                                                        $scope.items.unshift(data);
                                                    },
                                                    function (data) {
                                                        alert(angular.toJson(data));
                                                    }
                                            )
                                            ;
                                };

                                if ($routeParams.hasOwnProperty('id')) {
                                    $scope.selectItem($routeParams.id);
                                } else {
                                    $scope.selectItem();
                                }

                            },
                            function (response) {

                            }
                    );
        };

        __init();


    }]);

