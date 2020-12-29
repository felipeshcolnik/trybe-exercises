let space = " ";
let n = 19;
let asterix = "*";
let linha = "";
let Space = "";
let OutsideSpaceTimes = Math.ceil(n/2);
let InsideSpace = 1;
let counter = 0;

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
        counter = (counter +1);
        if (counter == 1) {
                teste = 0
        } else if (counter == 2) {
                linha = (linha + space + asterix); 
        } else {
                linha = (linha + space);
                for (let IndexInside = 2; IndexInside < counter ; IndexInside ++) {
                     linha = (linha + space + space);
                }
                linha = (linha + asterix);
        } 
        console.log(linha);
        linha = "";  
        
}
//asteriscos da ultima linha
for (let IndexFinal = 1; IndexFinal <= n; IndexFinal ++){
        linha = (linha + asterix);
}
console.log(linha);