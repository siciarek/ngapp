angular.module('app').directive('typeNip', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, control) {
            var validation = function (value) {
                var temp = value.trim();
                temp = temp.replace(/\D+/g, '');

                // Simple NIP validation:
                var valid = temp.match(/^\d{10}$/) !== null;

                control.$setValidity('nip', valid);
                return value;
            };

            control.$parsers.push(validation);
        }
    };
});

angular.module('app').directive('typePesel', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, control) {
            var validation = function (value) {
                var temp = value.trim();
                // Simple PESEL validation:
                var valid = temp.match(/^\d{11}$/) !== null;

                control.$setValidity('pesel', valid);
                return value;
            };

            control.$parsers.push(validation);
        }
    };
});


