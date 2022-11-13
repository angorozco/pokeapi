import React from 'react';
import './detail.css';
import { useParams } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import Loader from '../../components/Loader/Loader';

const Detail = () => {
  const {pokemonId} = useParams();

  const {pokemon, isLoading} = usePokemon(pokemonId);

  return (
    <div className={`detail ${pokemon.type}`}>
      {
        isLoading
        ? <Loader/>
        : <PokemonDetail pokemon={pokemon}/>
      }
    </div>
  )
}

export default Detail