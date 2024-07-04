import api from "@/api/api";
import { pokeType } from "@/types/pokemon";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PokemonDetailCard from "./PokemonDetailCard";

async function PokemonDetail({ id }: { id: number }) {
  // const pokemon = await api.getPokemon(id);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pokemon", { id }],
    queryFn: () => api.getPokemon(id),
    staleTime: Infinity,
  });

  const pokemon = await queryClient.getQueryData<pokeType>(["pokemon", { id }]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {pokemon && <PokemonDetailCard pokemon={pokemon} />}
    </HydrationBoundary>
  );
}

export default PokemonDetail;
