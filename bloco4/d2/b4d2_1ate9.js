//exercicio 1// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index +=1){
//        console.log((index + 1) + " numero do array eh " + numbers[index])
//

//exercicio2//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let resultado = 0;
//for (let index = 0; index < numbers.length; index +=1){
//        resultado = numbers[index] + resultado
//}
//console.log (resultado);

//exercicio3//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let resultado = 0;
//for (let index = 0; index < numbers.length; index +=1){
//        resultado = numbers[index] + resultado
//}
//console.log ("a media aritimetica do array eh: " + resultado/numbers.length);

// exercicio 4//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let resultado = 0;
//for (let index = 0; index < numbers.length; index +=1){
//        resultado = numbers[index] + resultado
//}
//let media = (resultado/numbers.length); 
//console.log( "a media eh " + media)
//if (media > 20){
//        console.log ("o valor da media eh maior que 20");
//} else {
//        console.log ("o valor da media ehvmenor ou igual a 20");

//}
        

//exercicio5//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maiorNumero = 0;
//for (let index = 0; index < numbers.length; index +=1){
//        if (maiorNumero < numbers[index]){
//                maiorNumero = numbers[index];
//        }
//}
//console.log( "o maior numero do array eh " + maiorNumero)

//exercicio6
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let oddNumbers = 0;
//for (let index = 0; index < numbers.length; index +=1){
//        if (numbers[index] % 2 !== 0){
 //               (oddNumbers = oddNumbers + 1 );
//        };
//}
//if (oddNumbers == 0){
//        console.log( "nenhum valor ímpar encontrado ");
//} else{
//        console.log("a quantidade de numeros impares no array eh " + oddNumbers);
//}

// exercicio7//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let smallerNumber = numbers[0];
//for (let index = 0; index < numbers.length; index +=1){
//        if (numbers[index] < smallerNumber){
//                (smallerNumber = numbers[index]);
//        };
//}
//console.log( "o menor numero do array eh " + smallerNumber);

// exercicio 8 (e continuacao para o 9
//let array = []
//for (index = 0; index < 25; index +=1) {
//        array.push(index +1);
//}
//console.log(array.toString());
// Exercicio 9 
//for (index = 0; index < 25; index +=1) {
//       array[index] = (array[index] / 2);
//}
//console.log(array.join("; "));