import { pokemonTypesName } from "@/types/pokemon";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    pokemonId: number;
  };
}

export async function GET(_: NextRequest, { params }: Context) {
  const id = params.pokemonId;

  try {
    const [response, specResponse] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
    ]);

    const koreanName = specResponse.data.names.find(
      (name: any) => name.language.name === "ko"
    );

    const typesWithKor = await Promise.all(
      response.data.types.map(async (type: { type: { url: string } }) => {
        const typeResponse = await axios.get(type.type.url);
        const koreanTypeName = typeResponse.data.names.find(
          (name: pokemonTypesName) => name.language.name === "ko"
        ).name;

        return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
      })
    );

    const abilitiesWithKor = await Promise.all(
      response.data.abilities.map(
        async (ability: { ability: { url: string } }) => {
          const abilityResponse = await axios.get(ability.ability.url);
          const koreanAbilityName = abilityResponse.data.names.find(
            (name: pokemonTypesName) => name.language.name === "ko"
          ).name;
          return {
            ...ability,
            ability: { ...ability.ability, korean_name: koreanAbilityName },
          };
        }
      )
    );

    const movesWithkor = await Promise.all(
      response.data.moves.map(
        async (move: { move: { name: string; url: string } }) => {
          const moveResponse = await axios.get(move.move.url);
          const koreanMoveName =
            moveResponse.data.names.find(
              (name: pokemonTypesName) => name.language.name === "ko"
            )?.name || move.move.name;
          return {
            ...move,
            move: { ...move.move, korean_name: koreanMoveName },
          };
        }
      )
    );
    console.log("movesWithkor____________", movesWithkor);
    const pokemonData = {
      ...response.data,
      korean_name: koreanName,
      types: typesWithKor,
      abilities: abilitiesWithKor,
      moves: movesWithkor,
    };

    return NextResponse.json(pokemonData);
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message });
  }
}
