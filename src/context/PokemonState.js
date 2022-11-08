import { useReducer } from 'react';
import PokemonContext from './PokemonContext';

function PokemonState({ children }) {
  const initialState = {
    selectedPokemon: null,
    offset: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SELECT_POKEMON':
        return { ...state, selectedPokemon: action.payload };
      case 'INCREMENT':
        return { ...state, offset: state.offset + 20 };
      case 'DECREMENT':
        return { ...state, offset: state.offset - 20 };
      default:
        throw new Error();
    }
  };

  const getPokemon = async (name) => {
    const pokemon_request = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const data = await pokemon_request.json();
    dispatch({
      type: 'SELECT_POKEMON',
      payload: data,
    });
  };

  function incrementOffset() {
    dispatch({
      type: 'INCREMENT',
    });
  }
  function decrementOffset() {
    dispatch({
      type: 'DECREMENT',
    });
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: state.selectedPokemon,
        offset: state.offset,
        getPokemon,
        incrementOffset,
        decrementOffset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonState;
