import './App.css';
import { Routes, Route } from 'react-router-dom';
import GetPokemon from './pages/GetPokemon';
import PokemonState from './context/PokemonState';
import SelectedPokemon from './pages/SelectedPokemon';

function App() {
  return (
    <PokemonState>
      <Routes>
        <Route path='/' element={<GetPokemon />} />
        <Route path='/selectedPokemon' element={<SelectedPokemon />} />
      </Routes>
    </PokemonState>
  );
}

export default App;
