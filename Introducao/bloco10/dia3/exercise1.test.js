const { randomico0 } = require('./exercise1');

test (' testa a funcao randomico ', () => {
  // jest.mock se estiver importando a funcao direto pra ca //
  let funcaoMock = jest.fn(randomico0).mockReturnValue(10);

  expect(funcaoMock()).toBe(10);
  expect(funcaoMock).toHaveBeenCalled();
  expect(funcaoMock).toHaveBeenCalledTimes(1);

});