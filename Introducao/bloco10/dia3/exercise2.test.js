const { randomico0 } = require ('./exercise1.js');

test(' funcao deve retornar a divisao de a por b ', () => {
  const test2 = jest.fn(randomico0)
    .mockImplementationOnce((a, b) => (a / b))
    .mockImplementation((a, b) => (a * b));
  
  expect(test2(6, 3)).toBe(2);
  expect(test2).toHaveBeenCalled();
  expect(test2).toHaveBeenCalledTimes(1);

  expect(test2(6, 3)).toBe(18);
  expect(test2).toHaveBeenCalled();
  expect(test2).toHaveBeenCalledTimes(2);
})