var pointInPoly = require('./index');

function showAndTest(poly, point, result) {
    expect(pointInPoly(poly, point)).toEqual(result);
}

it('should pass', () => {
    var poly = [
        [-5, -5],
        [5, -5],
        [5, 5],
        [-5, 5]
    ];
    showAndTest(poly, [-6, 0], false);
    showAndTest(poly, [1, 1], true);
});