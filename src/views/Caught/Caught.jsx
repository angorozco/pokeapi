import React from 'react';
import './caught.css';
import CaughtPokemon from '../../components/CaughtPokemon/CaughtPokemon';
import { useCaughtContext } from '../../context/CaughtContext'; 
import { Link } from 'react-router-dom'

const Caught = () => {
  const {caught} = useCaughtContext();

  return (
    <div className='caught'>
      {caught.length === 0 
      ? <div className='no-caught'>
          <p>You have 0 pokemons caught</p>
          <img className='no-caught-img' src="https://www.pngmart.com/files/22/Cubone-Pokemon-PNG-Pic.png" alt="" />
          <p>Wanna catch 'em all?</p>
          <Link to='/' className='btn'>GO</Link>
        </div>
      : <div className='pokemon-list'>
            {caught.map((pokemon) => <CaughtPokemon key={pokemon} pokemon={pokemon}/> )}
        </div>
      }
    </div>
  )
}

export default Caught