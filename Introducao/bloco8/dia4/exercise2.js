const assert = require('assert')

// escreva sum abaixo

// let numbers1 = [1,2,3,4];
const sum = (...numbers) => {
    let total = 0
    for (let index = 0; index < numbers.length; index += 1) {
        total += numbers[index]
      }
      return total;
     }


assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)