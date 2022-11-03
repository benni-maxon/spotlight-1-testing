// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should add exclamation points', (expect) => {
    const expected = 'CATS!!!';
    const actual = addExclamationPoints('CATS');

    expect.equal(actual, expected);

    const expected2 = 'Dogs!!!';
    const actual2 = addExclamationPoints('Dogs');

    expect.equal(actual2, expected2);

    const expected3 = 'bird!!!';
    const actual3 = addExclamationPoints('bird');

    expect.equal(actual3, expected3);
});

test('this test should multiply by seven', (expect) => {
    const expected = 7;
    const actual = multiplyBySeven(1);

    expect.equal(actual, expected);

    const expected2 = -14;
    const actual2 = multiplyBySeven(-2);

    expect.equal(actual2, expected2);

    const expected3 = 77;
    const actual3 = multiplyBySeven(11);

    expect.equal(actual3, expected3);
});

test('this test should multiply by twelve, then cut the result in half', (expect) => {
    const expected = 6;
    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected);

    const expected2 = -12;
    const actual2 = multiplyBy12ThenHalve(-2);

    expect.equal(actual2, expected2);

    const expected3 = 48;
    const actual3 = multiplyBy12ThenHalve(8);

    expect.equal(actual3, expected3);
});

test('this test should divide then multiply', (expect) => {
    const expected = 6;
    const actual = divideThenMultiply(4, 2, 3);

    expect.equal(actual, expected);

    const expected2 = -5;
    const actual2 = divideThenMultiply(-2, 2, 5);

    expect.equal(actual2, expected2);

    const expected3 = 6;
    const actual3 = divideThenMultiply(-2, 2, -6);

    expect.equal(actual3, expected3);
});

test('this test should return three numbers as an array', (expect) => {
    const expected = [4, 2, 3];
    const actual = returnAsAnArray(4, 2, 3);

    expect.deepEqual(actual, expected);

    const expected2 = [-2, 2, 5];
    const actual2 = returnAsAnArray(-2, 2, 5);

    expect.deepEqual(actual2, expected2);

    const expected3 = [-2, 2, -6];
    const actual3 = returnAsAnArray(-2, 2, -6);

    expect.deepEqual(actual3, expected3);
});
