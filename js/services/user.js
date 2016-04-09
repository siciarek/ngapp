app.service('User', function ($http, $filter, $q, $rootScope) {

    var _defaultItem = {
        id: null,
        gender: $rootScope.types.gender[0],
        firstName: null,
        lastName: null,
        dateOfBirth: null
    };

    var _gmap = {
        unknown: 0,
        male: 1,
        female: 2
    };

    var _list = [];

    this.save = function (item) {
        var data = angular.copy(item);
        data.gender = data.gender.id;
        data.dateOfBirth = $filter('date')(data.dateOfBirth, 'yyyy-MM-dd');

        return $http.post($rootScope.userService.url, data)
                .then(
                        function (response) {
                            if (typeof response.data === 'object' && response.data.type === 'info') {
                                var data = response.data.data;
                                data.gender = $rootScope.types.gender[_gmap[data.gender]];
                                data.dateOfBirth = new Date(data.dateOfBirth.replace(' ', 'T'));
                                return data;
                            }
                            return $q.reject(response);
                        },
                        function (response) {
                            return $q.reject(response);
                        }
                );
    };

    this.fetchList = function () {
        return $http.get($rootScope.userService.url)
                .then(
                        function (response) {
                            if (typeof response.data === 'object' && response.data.type === 'data') {
                                return response.data.data.items;
                            }

                            return $q.reject(response);
                        },
                        function (response) {
                            return $q.reject(response);
                        }
                )
                .then(function (data) {
                    _list = data;

                    // Map data to defined types:
                    for (var i = 0; i < _list.length; i++) {
                        _list[i].gender = $rootScope.types.gender[_gmap[_list[i].gender]];
                        _list[i].dateOfBirth = new Date(_list[i].dateOfBirth.replace(' ', 'T'));
                    }

                    return _list;
                })
                ;
    };

    this.getOne = function (id) {

        id = isNaN(id) ? 0 : parseInt(id);

        var temp = _list.filter(function (e) {
            return e.id === id;
        });

        if (temp.length > 0) {
            return temp.pop();
        }

        return angular.copy(_defaultItem);
    };

    this.removeOne = function (id) {
        _list.forEach(function (e, i) {
            if (e.id === id) {
                _list.splice(i, 1);
            }
        });

        var data = { params: { id: id }};

        return $http.delete($rootScope.userService.url, data)
                .then(
                        function (response) {
                            if (typeof response.data === 'object' && response.data.type === 'info') {
                                return response.data.data.items;
                            }

                            return $q.reject(response);
                        },
                        function (response) {
                            return $q.reject(response);
                        }
                )
                ;

    };
});
