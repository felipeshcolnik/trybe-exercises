import React from 'react';


class PokemonCard extends React.Component {
  render() {
    const  pokemon  = this.props.pokemon1;
    const { name, type, image, averageWeight } = pokemon;
    const { value, measurementUnit  } = averageWeight;
   
    return (
      <section>
        <h3>Nome: {name}</h3>
        <img src={image} alt="imagem do pokemon"/>
        <h3>Tipo: {type}</h3>
        <span>Peso: {value} {measurementUnit}</span>
     </section>
    );
  }
}

export default PokemonCard;