angular.module('app').factory('WeatherReport', function ($http, $q, $rootScope) {
    return {
        getReport: function () {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get($rootScope.weatherReportService.url)
                    .then(
                            function (response) {
                                if (typeof response.data === 'object') {
                                    return response.data;
                                } else {
                                    // invalid response
                                    return $q.reject(response);
                                }
                            },
                            function (response) {
                                // something went wrong
                                return $q.reject(response);
                            }
                    );
        }
    };
});
