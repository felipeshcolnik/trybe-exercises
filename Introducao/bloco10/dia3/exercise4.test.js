//Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const exercise4 = require('./exercise4');

jest.mock('./exercise4')

describe (' grupo de testes do exercicio 4', () => {
test('testa a funcao upperCase', () => {
    const test1 = jest.fn(exercise4.upperCase)
    test1.mockImplementation(word => word.toLowerCase())
    //const test1 = spyOn(exercise4, 'upperCase').mockImpl
    
    expect(test1('TRYBE')).toBe('trybe');
    expect(test1).toHaveBeenCalled();
    expect(test1).toHaveBeenCalledTimes(1);
  });

it('testa a funcao firstLetter', () => {
    const test2 = jest.fn(exercise4.firstLetter)
      .mockImplementation(word => word[word.length - 1])
  
    expect(test2('TRYBE')).toBe('E');
    expect(test2).toHaveBeenCalled();
    expect(test2).toHaveBeenCalledTimes(1);
  });

  test('testa a funcao concatenation', () => {
    const test3 = jest.fn(exercise4.concatenation)
      .mockImplementation((word1, word2, word3) => (word1 + word2 + word3))

    expect(test3('a', 'b', 'c')).toBe('abc');
    expect(test3).toHaveBeenCalled();
    expect(test3).toHaveBeenCalledTimes(1);
  })

})