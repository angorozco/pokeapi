import React from 'react';
import './pokemondetail.css';
import { useCaughtContext } from '../../context/CaughtContext';

const PokemonDetail = ({pokemon}) => {
  const {isCaught, handleCatch} = useCaughtContext();

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
        <div className='detail-btn'>
          <button className='btn' onClick={() => handleCatch(pokemon)}>
            {isCaught(pokemon.id)
            ? 'REMOVE'
            : 'CATCH'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail