import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Pokecard from '../components/Pokecard';


const Personajes = () => {
 
 const {name} = useParams();
  
 const [pokemones, setPokemones] = useState({});
 
 const baseUrl = "https://pokeapi.co/api/v2/pokemon";

 const consultarPokemon = async (name) => {
  
  const response = await fetch(`${baseUrl}/${name}`);
  const data = await response.json();
  setPokemones(data);
 }


  useEffect(() => {
    consultarPokemon(name);
    }, [name]);
 
  return (

    <div className='p-4'>
    <Pokecard pokemon={pokemones}/> 
    </div>
  );
}

export default Personajes;