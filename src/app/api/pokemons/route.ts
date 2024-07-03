import { pokemonType } from "@/types/pokemon";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const POKEMON_PER_PAGE = 20;
const TOTAL_POKEMON = 160;

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const pageString = params.get("page")!;

  if (!pageString) {
    console.log("UNVALID PAGE STRING ERROR___", pageString);
    return NextResponse.json({ error: `This page number is not valid` });
  }

  // const pageNumber = 3;
  const pageNumber = parseInt(pageString, 10);
  // console.log("PAGE___", pageNumber, typeof pageNumber);

  if (isNaN(pageNumber) || pageNumber < 1) {
    console.log("UNVALID PAGE NUMBER ERROR___", pageNumber);
    return NextResponse.json({ error: `This page number is not valid` });
  }

  const startIndex = (pageNumber - 1) * POKEMON_PER_PAGE;
  // console.log("startIndex___", startIndex);

  const endIndex = Math.min(pageNumber * POKEMON_PER_PAGE, TOTAL_POKEMON);
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

    const allPokemonData: pokemonType[] = allPokemonResponses.map(
      ([response, speciesResponse]) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
      }
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
