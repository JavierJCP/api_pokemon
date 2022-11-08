import { useContext } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import PokemonContext from '../context/PokemonContext';

function PokedexButton({ id }) {
  const { getPokemon } = useContext(PokemonContext);
  function handleLeft() {
    if (id > 0) {
      getPokemon(id - 1);
    }
  }
  function handleRight() {
    getPokemon(id + 1);
  }
  return (
    <div className='arrows_container'>
      <i>
        <BsFillArrowLeftSquareFill className='arrow' onClick={handleLeft} />
      </i>
      <i>
        <BsFillArrowRightSquareFill className='arrow' onClick={handleRight} />
      </i>
    </div>
  );
}

export default PokedexButton;
