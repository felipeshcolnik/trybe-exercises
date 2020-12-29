let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };

info.recorrente = 'Sim',

console.log(info.recorrente);

let segundoObjeto = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
};

for (let key in info, segundoObjeto) {
        if(info[key] === segundoObjeto[key] && info.recorrente === 'Sim' && segundoObjeto.recorrente === 'Sim'){
                console.log('Ambos recorrente');
        }else{
                console.log(info[key],  ' e ',  segundoObjeto[key]);
        }
                

}
