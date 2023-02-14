import useSWR from 'swr';
import React from 'react'
import { Card, Container, Image, Icon } from 'semantic-ui-react'
import {pokeApi} from "@/api/pokeApi";
import {PokemonListResponse} from "@/interfaces/pokemon-list";
import PokemonCard from "@/components/pokemonCard";

const Home = () => {
  const address = '/pokemon?limit=152';
  const fetcher = async () => pokeApi.get<PokemonListResponse>(address).then(res => res.data)
  const { data, error } = useSWR(address, fetcher);
  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;
  if (data) {
    const pokemons = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
    }));

  return (
    <Container>
      <Card.Group itemsPerRow={7} >
        {pokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} img={pokemon.image} id={pokemon.id} />
        ))}
      </Card.Group>
    </Container>
  );
}
}

export default Home;
