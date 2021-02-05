const { test, expect } = require('@jest/globals');
const searchEmployee = require('./bonus');
describe('Testes da função searchEmployee', () => {
  test('Verifica se searchEmployee é uma função', () => {
    expect(typeof(searchEmployee)).toBe('function');
  });
  test('verifica mensagem de erro caso nao receba parametro', () => {
    expect(() => searchEmployee()).toThrowError(new Error ('ID não identificada'));
  });
  test('verifica mensagem de erro caso nao receba parametro', () => {
    expect(() => searchEmployee('1111-1', 'firstName')).toThrowError(new Error ('ID não identificada'));
  });
  test('verifica se funcao retorna o nome, a partir de um ID correto', () => {
    const atual = (searchEmployee('4678-2', 'firstName'));
    const expected = ('Paul');
    expect(atual).toBe(expected);
  });
  test ('verifica se ao selecionar specialities, a funcao retorna um array', () => {
    const atual = (searchEmployee('4678-2', 'specialities'));
    expect(typeof(atual)).toBe('object');
  });
  test ('verifica se o array retornado possui as especialidades do funcionário', () => {
    const atual = (searchEmployee('5569-4', 'specialities'));
    expect(atual).toContain('Frontend', 'Redux', 'React', 'CSS');
  });
});