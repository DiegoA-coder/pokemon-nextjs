import {pokeApi} from "@/api/pokeApi";
import {Result} from "@/interfaces/pokemon-list";

export async  function fetcherPokemon (id: string) {
  pokeApi.get<Result>(`/pokemon/${id}`)
    .then(res => res.data)
}
