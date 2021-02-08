const { randomico0 } = require('./exercise1.js')

test (' testa se  funcao receba três parâmetros e retorne sua multiplicação', () => {
  const test3 = jest.fn(randomico0)
    .mockImplementation((a, b, c) => (a * b * c));

  expect(test3(3, 2, 4)).toBe(24);
  expect(test3).toHaveBeenCalled();
  expect(test3).toHaveBeenCalledTimes(1);

  test3.mockReset();
  test3.mockImplementation(a => a * 2);

  expect(test3(3)).toBe(6);
  expect(test3).toHaveBeenCalled();
  expect(test3).toHaveBeenCalledTimes(1);

})
