//const calculator = require('./../calculator')
import { doMath } from "./../calculator.js"


test('adds 15 + 3 equal to 18', () => {
    expect(doMath([['1','5'], ['+'], ['3']])).toStrictEqual([['1','8']]);
});