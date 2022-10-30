import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Details(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getById(props.id);
  }, []);

  async function getById(id) {
    const pokemon = await axios.get("http://localhost:3000/pokemon/" + id);
    setPokemon(pokemon.data);
  }

  return (
    <div>
      <h4>Pokemon Details</h4>
      <p>Name : {pokemon.name}</p>
      <p>Catch Date : {pokemon.catchDate}</p>
      <p>Gender : {pokemon.gender}</p>
      <p>Type : {pokemon.type}</p>
      <p>Base : {pokemon.base}</p>
      <p>Description : {pokemon.description}</p>
    </div>
  );
}
