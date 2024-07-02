"use client";
import api from "@/api/api";
import { pokemonType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Page from "../../../components/Page/Page";

function HomePage() {
  const { data: pokemons } = useQuery<
    AxiosResponse<pokemonType[]>,
    number,
    pokemonType[]
  >({
    queryKey: ["pokemons"],
    queryFn: () => api.getPokemon(),
  });

  console.log(pokemons);
  return (
    <Page>
      {pokemons?.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.korean_name}</div>
      ))}
    </Page>
  );
}

export default HomePage;
