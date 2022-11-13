import React from 'react';
import './pokemon.css';

const Pokemon = ({pokemon}) => {
  return (
    <div className='card'>
      <img className='card-img' src={pokemon.image} alt="" />
      <p className={`pokemon-name ${pokemon.type}`}>{pokemon.name}</p>
    </div>
  )
}

export default Pokemon