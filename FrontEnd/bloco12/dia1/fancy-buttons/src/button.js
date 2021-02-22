import React from 'react';

function testFunction() {
  console.log('Estou aprendendo');
}

function test() {
  console.log('Estou conseguindo');
}

function testing() {
  console.log('Estou fazendo');
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={testFunction}>Botão de Teste1</button>
        <button onClick={test}>Botão de Teste2</button>
        <button onClick={testing}>Botão de Teste3</button>
      </div>
      
    );
  }
}

export default Button;
