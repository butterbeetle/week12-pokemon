import api from "@/api/api";
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
    getNextPageParam: (lastPage: any) => lastPage.length + 1,
    initialPageParam: 1,
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
