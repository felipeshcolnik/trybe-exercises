
// const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, currentValue) => {
    return acc + currentValue.split('').reduce((acc, currentValue) => {
      if (currentValue === 'a' || currentValue === 'A') {
        return acc + 1;
      } return acc;
    }, 0)
  }, 0);
}
console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);