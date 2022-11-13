import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom'

const Pokemon = ({pokemon}) => {
  return (
    <Link to={`/detail/${pokemon.id}`} className='card'>
      <img className='card-img' src={pokemon.image} alt="" />
      <p className={`pokemon-name ${pokemon.type}`}>{pokemon.name}</p>
    </Link>
  )
}

export default Pokemon