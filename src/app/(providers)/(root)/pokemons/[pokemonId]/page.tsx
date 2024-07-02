"use client";

import api from "@/api/api";
import Page from "@/components/Page/Page";
import { pokeType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import PokemonDetail from "../../_components/PokemonDetail";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  const { data: pokemon } = useQuery<pokeType>({
    queryKey: ["pokemon", { id: params.pokemonId }],
    queryFn: () => api.getPokemon(params.pokemonId),
  });

  return <Page>{pokemon && <PokemonDetail pokemon={pokemon} />}</Page>;
}

export default PokemonDetailPage;
