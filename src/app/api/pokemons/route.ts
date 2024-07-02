import { pokemonType } from "@/types/pokemon";
import axios from "axios";
import { NextResponse } from "next/server";

const TOTAL_POKEMON = 4;

export async function GET() {
  try {
    const allPokemonPromises = Array.from(
      { length: TOTAL_POKEMON },
      (_, index) => {
        const id = index + 1;
        return Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ]);
      }
    );

    const allPokemonResponses = await Promise.all(allPokemonPromises);

    const allPokemonData: pokemonType[] = allPokemonResponses.map(
      ([response, speciesResponse]) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
        // return { ...response.data, ...speciesResponse.data };
      }
    );

    return NextResponse.json(allPokemonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
