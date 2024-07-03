import api from "@/api/api";
import Page from "@/components/Page/Page";
import { pokeType } from "@/types/pokemon";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PokemonDetail from "../../_components/PokemonDetail";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

async function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pokemon", { id: params.pokemonId }],
    queryFn: () => api.getPokemon(params.pokemonId),
    staleTime: Infinity,
  });

  const pokemon = await queryClient.getQueryData<pokeType>([
    "pokemon",
    { id: params.pokemonId },
  ]);

  return (
    <Page>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {pokemon && <PokemonDetail pokemon={pokemon} />}
      </HydrationBoundary>
    </Page>
  );
}

export default PokemonDetailPage;

export async function generateMetadata({ params }: PoketmonDetailPageProps) {
  const pokemon: pokeType = await api.getPokemon(params.pokemonId);

  return {
    title: `week12-pokemon-${pokemon.korean_name.name}`,
    description: `${pokemon.korean_name.name} 정보 페이지`,
  };
}
