import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { fetchPokemons } from './services/FetchPokemon';
import './componets/PokemonCard'
import PokemonCard from './componets/PokemonCard';


function App() {
   const [pokemons, setPokemons] = useState([]);
     useEffect(() => {
    fetchPokemons()
      .then(pokemons => setPokemons(pokemons))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

   return (
     <div className="container shadow p-3 ">
      <div className=" row justify-content-center ">
         {pokemons.map ((pokemon) => (
            <div class='col-md-4 col-sm-5 mb-4' >
              <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            </div>
         ))}
         
      </div>
      <footer className='footer-bg'>
        <h1>© 2025 Pokédex App</h1>
      </footer>
    </div>
  );
}

export default App;
