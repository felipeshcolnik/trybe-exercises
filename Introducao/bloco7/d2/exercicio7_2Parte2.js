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

// exercicio1
// function addKey (obj, key, value) { 
//   obj[key] = value;
//   console.log(obj);
// }
// addKey(lesson2, 'turno', 'manha');

// Exercicio 2
// function ListKeys(obj) { 
//   return Object.keys(obj);
// } // OU PODEMOS USAR A ARROW FUNCTION >> ListKeys = (obj) => Object.keys(obj);

// console.log(ListKeys(lesson1));

// Exercicio 3
// ObjectSize = (obj) => Object.keys(obj).length;
// console.log(ObjectSize(lesson3));

// Exercicio 4
// ObjectValues = (obj) => Object.values(obj);
// console.log(ObjectValues(lesson2));

// Exercicio 5
let allLessons = Object.assign( {}, {lesson1, lesson2, lesson3});
console.table(allLessons);


// Exercicio 6
// studentSum = (obj) => Object.values(lesson1);
console.log(allLessons.numeroEstudantes);

