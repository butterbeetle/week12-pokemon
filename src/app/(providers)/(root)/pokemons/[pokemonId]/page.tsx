import api from "@/api/api";
import Page from "@/components/Page/Page";
import { pokeType } from "@/types/pokemon";
import { Suspense } from "react";
import PokemonDetail from "../../_components/PokemonDetail";
import Loading from "./loading";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

async function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  // const data = await fetch(
  //   `http://localhost:3000/api/pokemons/${params.pokemonId}`,
  //   { cache: "force-cache" }
  // );
  // const pokemon = await data.json();

  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["pokemon", { id: params.pokemonId }],
  //   queryFn: () => api.getPokemon(params.pokemonId),
  //   staleTime: Infinity,
  // });

  // const pokemon = await queryClient.getQueryData<pokeType>([
  //   "pokemon",
  //   { id: params.pokemonId },
  // ]);

  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <PokemonDetail id={params.pokemonId} />
      </Suspense>
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
