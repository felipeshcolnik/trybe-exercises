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
