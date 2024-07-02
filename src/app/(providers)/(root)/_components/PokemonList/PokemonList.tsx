"use client";

import api from "@/api/api";
import { pokemonType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Image from "next/image";

function PokemonList() {
  const { data: pokemons } = useQuery<
    AxiosResponse<pokemonType[]>,
    number,
    pokemonType[]
  >({
    queryKey: ["pokemons"],
    queryFn: () => api.getPokemon(),
    gcTime: 1000 * 60 * 10, // 10분
    staleTime: 1000 * 60, // 1분
  });

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
      {pokemons?.map((pokemon) => (
        <li key={pokemon.id}>
          <div className="flex flex-col gap-y-4">
            <div>
              <div className="relative aspect-square border-2 rounded-lg">
                <Image
                  fill
                  className="object-contain"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                ></Image>
              </div>

              <div className="flex flex-col text-xs gap-y-1 justify-center p-2 ">
                <h4 className="text-gray-400">
                  No.{`${(pokemon.id + "").padStart(4, "0")}`}
                </h4>
                <h5 className="text-base font-bold">{pokemon.korean_name}</h5>
              </div>
            </div>

            <div className="flex justify-between">
              {pokemon.types.map(({ type: { name } }) => (
                <div className="text-xs rounded-md px-8 py-1 border" key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
