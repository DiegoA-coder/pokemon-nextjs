import PokemonCard from "@/components/pokemonCard";
import React from 'react';
import {pokeApi} from "@/api/pokeApi";
import useSWR from 'swr';
import {Result} from "@/interfaces/pokemon-list";
import { useRouter } from 'next/router'
const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query
  const address = `/pokemon/${id}`;

  const fetcher = async () => pokeApi.get<Result>(address).then(res => res.data)
  const {
    data,
    error
  } = useSWR(address, fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;
  if (data) {
    const pokemon: Result = data;
    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    return (
     <PokemonCard name={pokemon.name} img={pokemon.img} id={pokemon.id}/>
    )
  }
}
export default Pokemon;
