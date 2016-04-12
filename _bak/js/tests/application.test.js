describe('DefaultController', function() {

    var DefaultController, scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        DefaultController = $controller('DefaultController', {
            $scope: scope
        });
    }));

    it('has empty intitial value', function () {
        expect(scope.value).toBeNull();
    });

    it('has nonempty value after caling setValue method', function () {
        expect(scope.value).toBeNull();
        scope.setValue('Hello World!');
        expect(scope.value).not.toBeNull();
        expect(scope.value).toEqual('Hello World!');
    });

    it('has empty value after caling resetValue method', function () {
        scope.setValue('Hello World!');
        expect(scope.value).not.toBeNull();
        scope.resetValue();
        expect(scope.value).toBeNull();
    });
});

