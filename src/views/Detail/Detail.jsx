import React from 'react';
import './detail.css';
import { useParams } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

const Detail = () => {
  const {pokemonId} = useParams();
  console.log(pokemonId)

  const {pokemon} = usePokemon(pokemonId);

  console.log(pokemon)
  return (
    <div className={`detail ${pokemon.type}`}>
      <PokemonDetail pokemon={pokemon}/>
    </div>
  )
}

export default Detail