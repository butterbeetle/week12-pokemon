"use client";

import api from "@/api/api";
import { pokemonType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import PokemonCard from "./PokemonCard";
import PokemonSkeletonCard from "./PokemonSkeletonCard";

function PokemonList() {
  const { data: pokemons, isLoading } = useQuery<pokemonType[]>({
    queryKey: ["pokemons"],
    queryFn: () => api.getPokemons(),
  });

  // console.log("POKEMON LIST___", pokemons);
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
      {pokemons?.map((pokemon) => (
        <li key={pokemon.id}>
          {isLoading && <PokemonSkeletonCard />}
          {!isLoading && (
            <Link href={`/pokemons/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
