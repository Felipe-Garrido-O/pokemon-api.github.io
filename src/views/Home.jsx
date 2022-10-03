import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [pokemon, setPokemon] = useState ([]);

  const [selected , setSelected] = useState ("");

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  
  const consultarApi = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    setPokemon(data);
  
   };
   
  useEffect (() => {
  consultarApi();
  }, [] );

    const navigate = useNavigate();
    const irPokemones = () => {
        navigate(`/personajes/${selected}`);
    };

  return (
    <>
    <div className='p-4'>
    <h1>Bienvenido maestro pókemon</h1>
    <img src="https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0089.gif"/>
    
     <h2>Selecciona un pokemon</h2>
       
     <div className="col-5 col-sm-3  col-lg-2 mx-auto ">

          <select value={selected} className="form-select text-center"
            onChange={(e) => setSelected(e.target.value)}>

            <option value="" disabled>
             Selecciona
            </option>

            {pokemon.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>

          <Button onClick={irPokemones} variant="dark" className="mt-3">
            Ver Detalle
          </Button>

        </div>
     
    </div>
    </>      
  );
}
export default Home;

