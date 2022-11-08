import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

function Buttons() {
  const { offset, incrementOffset, decrementOffset } =
    useContext(PokemonContext);

  function handleClick() {
    if (offset >= 20) {
      decrementOffset();
    }
  }

  return (
    <div className='buttons'>
      <button onClick={handleClick}>previous</button>
      <button onClick={incrementOffset}>next</button>
    </div>
  );
}

export default Buttons;
