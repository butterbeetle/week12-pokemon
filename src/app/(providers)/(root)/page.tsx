import api from "@/api/api";
import { pokemonType } from "@/types/pokemon";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Page from "../../../components/Page/Page";
import PokemonList from "./_components/PokemonList";

async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => api.getPokemons(pageParam),
    getNextPageParam: (lastPage: pokemonType[]) => lastPage.length + 1,
    initialPageParam: 0,
  });

  return (
    <Page>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonList />
      </HydrationBoundary>
    </Page>
  );
}

export default HomePage;
