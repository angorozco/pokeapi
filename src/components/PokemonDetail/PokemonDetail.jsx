import React from 'react';
import './pokemondetail.css';

const PokemonDetail = ({pokemon}) => {
  return (
    <div className='pokemon-detail'>
    <img className='detail-img'  src={pokemon.image} alt={pokemon.name} /> 
      <div className='detail-info'>
        <h1>{pokemon.name}</h1>
        <div className='detail-data'>
          <span>Type</span>
          <span>{pokemon.type}</span>
        </div>
        <div className='detail-data'>
          <span>Weight</span>
          <span>{pokemon.weight}</span>
        </div>
        <div className='detail-data'>
          <span>Height</span>
          <span>{pokemon.height}</span>
        </div>
        
      </div>
    </div>
  )
}

export default PokemonDetail