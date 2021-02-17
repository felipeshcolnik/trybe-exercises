import React from 'react';

import PokemonCard from './Pokemon';


class Pokedex extends React.Component {
  render() {
    
    return (
      <section>
        {this.props.pokemonsProp.map(pokemon => {
          return <PokemonCard pokemon1={pokemon}/>
          })}

      </section>
    );
  }
}

export default Pokedex;