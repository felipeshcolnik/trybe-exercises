import React from 'react';

import PokemonCard from './Pokemon';
import './Pokedex.css';


class Pokedex extends React.Component {
  render() {
    const { pokemonsProp } = this.props;
    return (
      <section>
        {pokemonsProp.map(pokemon => 
           <PokemonCard pokemon1={pokemon}/>
          )}

      </section>
    );
  }
}

export default Pokedex;