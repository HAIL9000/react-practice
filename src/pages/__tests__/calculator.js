import { doMath } from "./../calculator.js"

test('adds 15 + 3 equal to 18', () => {
    expect(doMath([['1','5'], ['+'], ['3']])).toStrictEqual([['1','8']]);
});

test('subtracts 0 - 5 equal to -5', () => {
    expect(doMath([['0'], ['-'], ['5']])).toStrictEqual([['-','5']]);
});

test('multiplies 2.5 x 23 equal to 57.5', () => {
    expect(doMath([['2','.','5'], ['x'], ['2','3']])).toStrictEqual([['5','7','.','5']]);
});

test('divides 6 / 4 equal to 1.5', () => {
    expect(doMath([['6'], ['÷'], ['4']])).toStrictEqual([['1','.','5']]);
});