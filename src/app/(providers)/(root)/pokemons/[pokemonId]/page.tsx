"use client";

import api from "@/api/api";
import Page from "@/components/Page/Page";
import { pokemonType } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  const { data: pokemon } = useQuery<pokemonType>({
    queryKey: ["pokemon", { id: params.pokemonId }],
    queryFn: () => api.getPokemon(params.pokemonId),
  });

  return (
    <Page>
      {
        <div className="w-full border-4 border-black flex flex-col items-center">
          <div className="relative aspect-square w-full">
            <Image
              src={pokemon?.sprites?.front_default!}
              fill
              className="object-cover"
              alt="ddd"
            />
          </div>

          <div className="flex flex-col text-xs gap-y-1 justify-center p-2 ">
            <h4 className="text-gray-400">
              No.{`${(pokemon?.id + "").padStart(4, "0")}`}
            </h4>
            <h5 className="text-base font-bold">{pokemon?.korean_name.name}</h5>
          </div>
        </div>
      }
    </Page>
  );
}

export default PokemonDetailPage;
