// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const exercise6 = require('./exercise6');

describe('testa a porra toda', () => {
  const fetchFunction = jest.spyOn(exercise6, 'apiRequisition');
  afterEach(fetchFunction.mockReset)

  test('teste de sucesso da funcao', () => {
    fetchFunction.mockResolvedValue('sucess')

   expect(fetchFunction()).resolves.toBe('sucess');
   expect(fetchFunction).toHaveBeenCalled();
   expect(fetchFunction).toHaveBeenCalledTimes(1); 
  });

  test('testa a falha do teste da funcao', () => {
    fetchFunction.mockRejectedValue('fail')

    expect(fetchFunction()).rejects.toBe('fail');
    expect(fetchFunction).toHaveBeenCalled();
    expect(fetchFunction).toHaveBeenCalledTimes(1);
  })
})
