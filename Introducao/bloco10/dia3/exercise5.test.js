//Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const exercise5 = require('./exercise4');
// jest.mock('./exercise4') >> nao restaura a funcao So quem faz isso eh o SpyOn (linha 8);

describe('testando funcao upperCase', () => {
  it('upperToLower', () => {
    const lower = jest.spyOn(exercise5, 'upperCase')
      .mockImplementation(string => string.toLowerCase());

    expect(lower('TRYBE')).toBe('trybe');
    expect(lower).toHaveBeenCalled();
    expect(lower).toHaveBeenCalledTimes(1);
  });

  it('returnToUpperCase', () => {
    exercise5.upperCase.mockRestore();

    expect(exercise5.upperCase('trybe')).toBe('TRYBE');
  }) 
})
// 