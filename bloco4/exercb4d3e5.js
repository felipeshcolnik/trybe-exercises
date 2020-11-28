let space = " ";
let n = 7;
let asterix = "*";
let linha = "";
let Space = "";
let OutsideSpaceTimes = Math.ceil(n/2);
let InsideSpace = 1;
let counter = 0;
let teste = "T";

for (let indexLine = 1; indexLine <= (Math.floor(n/2)); indexLine ++ ) {
        
        OutsideSpaceTimes = (OutsideSpaceTimes - 1);     
        // loop para espacos fora na esqueda
        for (let IndexSpace = 1; IndexSpace <= OutsideSpaceTimes ; IndexSpace ++){    
                linha = (linha + space);
        }
        // adding asterxix
        linha = (linha + asterix);
        
        //for (IndexSpace = 1; IndexSpace <= OutsideSpaceTimes ; IndexSpace ++){
        //                        linha = (linha + space);
        //}   
        console.log(linha);
        linha = "";  
        counter = (counter + 1);
}




//asteriscos da ultima linha
for (let IndexFinal = 1; IndexFinal <= n; IndexFinal ++){
        linha = (linha + asterix);
}
console.log(linha);
console.log(counter);