import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import Navbar from '../components/Navbar';

// CSS
import '../styles/selectedPokemon.css';
import PokedexButton from '../components/PokedexButton';

function SelectedPokemon() {
  const { selectedPokemon } = useContext(PokemonContext);
  const urlImg1 = selectedPokemon.sprites.other.dream_world.front_default;
  // const urlImg2 = selectedPokemon.sprites.front_default;
  // const urlImg3 = selectedPokemon.sprites.front_shiny;
  let id = selectedPokemon.id;

  if (!selectedPokemon) {
    return <div>no pokemon selected</div>;
  } else {
    return (
      <div className='selectedPokemon_container'>
        <Navbar />

        <div className='pokedex_container'>
          <div className='pokedex'>
            <div className='yellow_circle'></div>
            <div className='green_circle'></div>
            <div className='screen'>
              <img src={urlImg1} alt='pokemon img' className='img_pokemon' />
            </div>
            <div className='pokemon_info'>
              <p>name: {selectedPokemon.name}</p>

              <p>
                types:
                {selectedPokemon.types.map((type, index) => (
                  <p className='types_p' key={index}>
                    {type.type.name}
                  </p>
                ))}
              </p>
              <p>
                abilities:
                {selectedPokemon.abilities.map((ability, index) => (
                  <p key={index}>⚫ {ability.ability.name}</p>
                ))}
              </p>
            </div>

            <PokedexButton id={id} />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedPokemon;
