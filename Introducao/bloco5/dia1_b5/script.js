//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()

//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        function newtext () {
        let paragraph = document.getElementsByTagName ('p')[1]
        paragraph.innerHTML = "serei fera!";
      }
      newtext();

//Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      function changebackground () {
        let backgrounds = document.getElementsByClassName ('main-content')[0]
        backgrounds.style.backgroundColor = 'rgb(76,164,109)';
      }
      changebackground();

// Crie uma função que mude a cor do quadrado vermelho para branco.
      function centerSquarefuncion () {
              let centerSquare = document.getElementsByClassName ('center-content') [0];
              centerSquare.style.backgroundColor = 'white';
      }
      centerSquarefuncion();

// Crie uma função que corrija o texto da tag <h1>.
      function CorretText () {
        let h1 = document.getElementsByTagName('h1')[0];
        h1.innerText = 'Exercício 5.1 - JavaEscript ';
      }
      CorretText();
      
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
      function Capslock() {
        let paragraph = document.getElementsByTagName('p')[0];
        paragraph.innerText = 'TEXTO PADRAO DO NOSSO SITE';
      }
      Capslock();

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
      function plog() {
        let text1 = document.getElementsByTagName('p')[0];
        console.log(text1) 
        let text2 = document.getElementsByTagName('p')[1];
        console.log(text2) 
        let text3 = document.getElementsByTagName('p')[2];
        console.log(text3) 
      }
      plog();