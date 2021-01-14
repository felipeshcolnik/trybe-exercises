const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// APLICAÇÃO

// exercicio1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela
// function addKey (obj, key, value) { 
//   obj[key] = value;
//   console.log(obj);
// }
// addKey(lesson2, 'turno', 'manha');

// Exercicio 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// function ListKeys(obj) { 
//   return Object.keys(obj);
// } // OU PODEMOS USAR A ARROW FUNCTION >> ListKeys = (obj) => Object.keys(obj);

// console.log(ListKeys(lesson1));

// Exercicio 3 Crie uma função para mostrar o tamanho de um objeto.

// ObjectSize = (obj) => Object.keys(obj).length;
// console.log(ObjectSize(lesson3));

// Exercicio 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// ObjectValues = (obj) => Object.values(obj);
// console.log(ObjectValues(lesson2));

// Exercicio 5  Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

let allLessons = Object.assign( {}, {lesson1, lesson2, lesson3});

// ADICIONANDO UM KEY NO OBJETO (NAO SOLCIITADO NO EXERCICIO)
allLessons.lesson4 = {
  materia: 'geografia',
  numeroEstudantes: 5
};

// Exercicio 6 

// OPCAO 1
console.log((allLessons.lesson1.numeroEstudantes) + (allLessons.lesson2.numeroEstudantes) +(allLessons.lesson3.numeroEstudantes));
// OPCAO 2
function teste (object) {
  let counter = 0;
  const array = Object.values(object);
  for (let i = 0; i < Object.values(allLessons).length; i += 1) {
    counter += array[i].numeroEstudantes;
  }
  return counter;
}
console.log(teste(allLessons));
