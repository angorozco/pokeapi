import React from 'react';
import './home.css';
import { usePokemons } from '../../hooks/usePokemons';
import Loader from '../../components/Loader/Loader';
import PokemonList from '../../components/PokemonList/PokemonList';


const Home = () => {
  const {pokemons, isLoading} = usePokemons();

  console.log(pokemons)

  return (
    <div className='home'>
      {isLoading
      ? <Loader/>
      : <div className='btn-bar'>
          <PokemonList pokemons={pokemons}/>
        </div>
      }
    </div>
  )
}

export default Home