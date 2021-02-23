import React from 'react';


class Button extends React.Component {
  constructor() {
    super()
    this.state = {NumberOfClicks: 0}
    this.testFunction = this.testFunction.bind(this)
    this.test = this.test.bind(this)
    this.testing = this.testing.bind(this)
  }
  testFunction() {
    this.setState((lastState, _props) => ({NumberOfClicks: lastState.NumberOfClicks + 1
    }))
  }

  test() {
    console.log(this.state.NumberOfClicks);
    console.log('Estou conseguindo');
  }
  testing() {
    console.log(this);
    console.log('Estou fazendo');
  }
  render() {
    return (
      <div>
        <button onClick={this.testFunction}>Conta</button>
        <button onClick={this.test}>ThisStateNum&EstouConseguindo</button>
        <button onClick={this.testing}>This&EstouFazendo</button>
      </div>
      
    );
  }
}

export default Button;
