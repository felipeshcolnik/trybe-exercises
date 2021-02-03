const assert = require('assert');
// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
function sum(a, b) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('parameters must be numbers');
  // }

  return a + b;
}
const expected = sum(4,"a");
assert.notStrictEqual(expected, 9, 'Nao é um numero');

// implemente seus testes aqui