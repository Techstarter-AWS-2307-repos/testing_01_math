const { add, sub, mult, div } = require('../src/math');

describe('Addition Operator', function () {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 5 + 100 to equal 105', () => {
        expect(add(5, 100)).toBe(105);
    });

});

describe('Subtract Operator', function () {
    test('subtracts 25 - 12 to equal 13', () => {
        expect(sub(25, 12)).toBe(13);
    });

    test('subtracts -25 - 12 to equal -37', () => {
        expect(sub(-25, 12)).toBe(-37);
    });
});

describe('Division Operator', () => {
    test('divides 6 throu 2', () => {
        expect(div(6, 2)).toBe(3);
    });

    test('throw Error at division against zero', () => {
        expect(() => div(5, 0)).toThrow("Division against Zero is not allowed.");
    });
});    

describe('Multiplication Operator', () => {
    test('multiplies 12 with 5', () => {
        expect(mult(12, 5)).toBe(60);
    });
    test('multiplies 2 with 100', () => {
        expect(mult(2, 100)).toBe(200);
    });

});    
