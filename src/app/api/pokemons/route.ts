import { pokemonType, pokemonTypesName } from "@/types/pokemon";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const POKEMON_PER_PAGE = 20;
const TOTAL_POKEMON = 160;

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const pageString = params.get("page")!;

  if (!pageString) {
    console.log("UNVALID PAGE STRING ERROR___", pageString, typeof pageString);
    return NextResponse.json({ error: `This page number is not valid` });
  }

  // const pageNumber = 3;
  const pageNumber = parseInt(pageString, 10);
  // console.log("PAGE___", pageNumber, typeof pageNumber);

  if (isNaN(pageNumber) || pageNumber < 0) {
    console.log("UNVALID PAGE NUMBER ERROR___", pageNumber, typeof pageNumber);
    return NextResponse.json({ error: `This page number is not valid` });
  }

  const startIndex = pageNumber * POKEMON_PER_PAGE;
  // console.log("startIndex___", startIndex);

  const endIndex = Math.min((pageNumber + 1) * POKEMON_PER_PAGE, TOTAL_POKEMON);
  // console.log("endIndex___", endIndex);

  try {
    const allPokemonPromises = Array.from(
      { length: endIndex - startIndex },
      (_, index) => {
        const id = startIndex + index + 1;
        return Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ]);
      }
    );

    const allPokemonResponses = await Promise.all(allPokemonPromises);

    const allPokemonData: pokemonType[] = await Promise.all(
      allPokemonResponses.map(async ([response, speciesResponse]) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );

        const typesWithKor = await Promise.all(
          response.data.types.map(async (type: { type: { url: string } }) => {
            const typeResponse = await axios.get(type.type.url);
            const koreanTypeName = typeResponse.data.names.find(
              (name: pokemonTypesName) => name.language.name === "ko"
            ).name;

            return {
              ...type,
              type: { ...type.type, korean_name: koreanTypeName },
            };
          })
        );

        return {
          ...response.data,
          korean_name: koreanName?.name || null,
          types: typesWithKor,
        };
      })
    );

    return NextResponse.json(allPokemonData);
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({
      error: err.message,
      message: "데이터 가져오는도중 문제 발생!!",
    });
  }
}
