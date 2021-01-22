
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const getSum = arrays.reduce((result, number) => {
    result = result.concat(number);
    return result;
  }, []);
  // const sumNumbers = arrays.reduce(getSum);
  return (getSum);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);