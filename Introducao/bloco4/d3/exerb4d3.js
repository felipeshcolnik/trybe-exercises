//exercicio1
//linha = "";
//let n = 5;
//textolinha = "";
//const x = "*";
//for (linha = 1; linha <= n; linha ++){
//        textolinha = textolinha + x;
//}
//for (coluna = 1; coluna <= n; coluna ++){
//        console.log(textolinha);       
//}

// exericicio 2
//linha = "";
//let n = 5;
//textolinha = "";
//const x = "*";
//for (linha = 1; linha <= n; linha ++){
//        textolinha = textolinha + x;
//        console.log(textolinha);
//}

// exercicio 3 let space = " ";
//let n = 5;
//let asterix = "*"
//let linha = "";

//for (let indexLine = 1; indexLine <= n; indexLine ++){
//        let spaceLoop = (n - indexLine);
//        let asterixLoop = indexLine;
//        for (IndexLoop = 1; IndexLoop <= spaceLoop; IndexLoop ++) {
//                linha = (linha + space);
//        }
//        for (IndexLoop = 1; IndexLoop <= asterixLoop; IndexLoop ++) {
//                linha = (linha + asterix);
//        } 
//        console.log(linha);
//        linha = "";
//}




//for (linha = 1; linha <= n; linha ++){
//        textolinha = textolinha + x;
//        console.log(textolinha);
//}

// exercicio 4 
let space = " ";
let n = 14;
let asterix = "*"
let linha = "";
let outSideSpace = "";
let OutSideSpaceTimes = Math.ceil(n/2);

for (let indexLine = 1; indexLine <= (Math.ceil(n/2)); indexLine ++ ) {
        OutSideSpaceTimes = (OutSideSpaceTimes - 1);
        let asterixTimes = (n - (2*OutSideSpaceTimes));
        for (let IndexSpace = 1; IndexSpace <= OutSideSpaceTimes ; IndexSpace ++){
                linha = (linha + space);
        }
        for (let IndexAsterix = 1; IndexAsterix <= asterixTimes ; IndexAsterix ++) {
                        linha = (linha + asterix);
        }
        for (IndexSpace = 1; IndexSpace <= OutSideSpaceTimes ; IndexSpace ++){
                                linha = (linha + space);
        }   
        console.log(linha);
        linha = "";  
}

