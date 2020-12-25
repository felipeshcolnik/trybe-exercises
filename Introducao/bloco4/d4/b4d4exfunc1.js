let word = "Arara";
let arrayletters = word.split("");
let palindromo = false;


for (let index = 0; index <= arrayletters.length; index ++){
        if(arrayLetters[index] === arrayLetters.reverse){
                palindromo = true;
        }else{
                palindromo = false;
                console.log(palindromo);
                break;

        }
}
console.log(palindromo);

                


//function checkPalindromo(word) {