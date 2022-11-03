// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

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
