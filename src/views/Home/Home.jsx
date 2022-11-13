import React, {useState} from 'react';
import './home.css';
import { usePokemons } from '../../hooks/usePokemons';
import Loader from '../../components/Loader/Loader';
import PokemonList from '../../components/PokemonList/PokemonList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [page, setPage] = useState(1);
  const {pokemons, isLoading} = usePokemons(page);
  const navigate = useNavigate();



  const handlePrev = () => {
    if (page > 1) {
      setPage(page  - 1);
    }
  }

  const handleNext = () => {
    if (page < 58){
      setPage(page + 1);
    }
  }

  const search = (e) => {
    e.preventDefault();
    navigate(`/detail/${e.target.search.value}`)
  }

  return (
    <div className='home'>
      {isLoading
      ? <Loader/>
      : <div>
          <div className='btn-bar'>
            <Pagination handleNext={handleNext} handlePrev={handlePrev}/>
            <SearchBar search={search}/>
          </div>
          <PokemonList pokemons={pokemons}/>
        </div>
      }
    </div>
  )
}

export default Home