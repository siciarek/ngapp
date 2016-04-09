app.controller('DefaultController', ['$scope', '$rootScope', '$interval', 'WeatherReport', function ($scope, $rootScope, $interval, WeatherReport) {

        var getWeatherForecast = function () {
            return WeatherReport.getReport()
                    .then(
                            function (data) {

                                if (data.success === true) {
                                    console.info(data.data);
                                } else {
                                    console.warn(data.data);
                                }

                                $scope.weatherReport = data.data;
                            },
                            function (response) {
                                $scope.weatherReport = {
                                    message: response.statusText,
                                    code: response.status,
                                    data: response.data
                                };
                            }
                    );
        };

        $interval(function () {
            getWeatherForecast();
        }, $rootScope.weatherReportService.polingInterval * 1000);

        $scope.data = {
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
                }
            ]
        };

        $scope.value = null;

        $scope.setValue = function (value) {
            $scope.value = value;
        };

        $scope.setValue = function (value) {
            $scope.value = value;
        };

        $scope.resetValue = function () {
            $scope.value = null;
        };
    }]);

