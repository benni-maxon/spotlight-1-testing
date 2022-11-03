// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, myFunction } from '../functions.js';

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
