import React from 'react'
import './pokemonlist.css'
import Pokemon from '../Pokemon/Pokemon'

const PokemonList = ({pokemons}) => {
  return (
    <div className='pokemon-list'>
      {pokemons.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
    </div>
  )
}

export default PokemonList