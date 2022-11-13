import React from 'react';
import './detail.css';
import { useParams } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

const Detail = () => {
  const {pokemonId} = useParams();

  const {pokemon} = usePokemon(pokemonId);

  return (
    <div className={`detail ${pokemon.type}`}>
      <PokemonDetail pokemon={pokemon}/>
    </div>
  )
}

export default Detail