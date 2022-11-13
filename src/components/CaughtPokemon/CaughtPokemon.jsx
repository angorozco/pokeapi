import React from 'react';
import './caughtpokemon.css';
import { useCaughtContext } from '../../context/CaughtContext'

const CaughtPokemon = ({pokemon}) => {
  const {handleCatch} = useCaughtContext();
  return (
      <div className={`caught-card ${pokemon.type}`}>
        <img className='caught-img' src={pokemon.image} alt={pokemon.name} />
        <div>
          <p className='caught-name'>{pokemon.name}</p>
          <div><button className='btn caught-btn' onClick={() => handleCatch(pokemon)}>X</button></div>
        </div>
    </div>
  )
}

export default CaughtPokemon