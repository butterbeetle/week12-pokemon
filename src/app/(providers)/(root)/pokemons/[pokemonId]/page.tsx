"use client";

import api from "@/api/api";
import Page from "@/components/Page/Page";
import { pokemonType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  const { data: pokemon } = useQuery<pokemonType>({
    queryKey: ["pokemon", { id: params.pokemonId }],
    queryFn: () => api.getPokemon(params.pokemonId),
  });
  console.log("POKEMON___", pokemon);
  return <Page>DetailPage</Page>;
}

export default PokemonDetailPage;
