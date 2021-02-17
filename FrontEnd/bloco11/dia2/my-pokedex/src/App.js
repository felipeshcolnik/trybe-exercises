import React from 'react';

import './App.css';
import Pokedex from './Component/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>PokedexList</h1>
        <Pokedex pokemonsProp={pokemons}/>
      </div>
    )
  }
}

export default App;
