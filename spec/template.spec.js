describe('Template Test', function () {

    var nullValue;
    var notNullValue;

    beforeEach(function () {
        nullValue = null;
        notNullValue = 1;
    });

    it('should confirm that nullValue is null', function () {
        expect(nullValue).toBeNull();
    });

    it('should confirm that notNullValue is not null', function () {
        expect(notNullValue).not.toBeNull();
    });

    it('should confirm that notNullValue equals 1', function () {
        expect(notNullValue).toEqual(1);
    });
});
