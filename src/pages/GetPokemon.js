import { useContext, useState } from 'react';
import { useEffect } from 'react';
import ImgPokemon from '../components/ImgPokemon';
// CSS
import '../styles/getPokemon.css';
import { useNavigate } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import Buttons from '../components/Buttons';

function GetPokemon() {
  let navigate = useNavigate();

  const [list, setList] = useState(null);
  const [nameInput, setNameInput] = useState('');
  const { getPokemon, offset } = useContext(PokemonContext);

  useEffect(() => {
    (async function () {
      const pokemon_request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
      );
      const data_pokemon = await pokemon_request.json();
      setList(data_pokemon);
    })();
  }, [offset]);

  function handleClick(name) {
    getPokemon(name);
    setTimeout(() => {
      navigate('/selectedPokemon');
    }, '500');
  }
  function handleSubmit(e) {
    e.preventDefault();
    getPokemon(nameInput.toLocaleLowerCase());
    setTimeout(() => {
      navigate('/selectedPokemon');
    }, '500');
  }

  return (
    <div className='getPokemon_container'>
      {list ? (
        <>
          <form className='input_pokemon' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder=" Pokemon's name "
              onChange={(e) => setNameInput(e.target.value)}
            />
          </form>
          <div className='list_pokemon'>
            {list.results.map((pokemon, index) => (
              <div key={index} className='pokemon'>
                <ImgPokemon url={pokemon.url} />
                <a href='#!' onClick={() => handleClick(pokemon.name)}>
                  {pokemon.name}
                </a>
              </div>
            ))}
          </div>

          <Buttons />
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default GetPokemon;
