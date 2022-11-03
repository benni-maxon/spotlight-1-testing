// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getLastItem,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
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

test('this test should return three numbers as a string', (expect) => {
    const expected = '423';
    const actual = returnAsAString(4, 2, 3);

    expect.equal(actual, expected);

    const expected2 = '-225';
    const actual2 = returnAsAString(-2, 2, 5);

    expect.equal(actual2, expected2);

    const expected3 = '-22-6';
    const actual3 = returnAsAString(-2, 2, -6);

    expect.equal(actual3, expected3);
});

test('this test should make a lucky greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 6.';
    const actual = makeLuckyGreeting(4, 2);

    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 3.';
    const actual2 = makeLuckyGreeting(-2, 5);

    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is -8.';
    const actual3 = makeLuckyGreeting(-2, -6);

    expect.equal(actual3, expected3);
});

test('this test should return second item from array', (expect) => {
    const expected = 'burritos';
    const actual = getSecondItem(['tacos', 'burritos', 'quesadilla']);

    expect.equal(actual, expected);

    const expected2 = 'wine';
    const actual2 = getSecondItem(['tea', 'wine', 'beer']);

    expect.equal(actual2, expected2);

    const expected3 = 'fishing';
    const actual3 = getSecondItem(['hockey', 'fishing', 'bikes']);

    expect.equal(actual3, expected3);
});

test('this test should return last item from array', (expect) => {
    const expected = 'quesadilla';
    const actual = getLastItem(['tacos', 'burritos', 'quesadilla']);

    expect.equal(actual, expected);

    const expected2 = 'beer';
    const actual2 = getLastItem(['tea', 'beer']);

    expect.equal(actual2, expected2);

    const expected3 = 'hockey';
    const actual3 = getLastItem(['hockey']);

    expect.equal(actual3, expected3);
});
