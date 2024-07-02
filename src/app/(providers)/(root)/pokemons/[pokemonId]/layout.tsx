import api from "@/api/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

interface PoketmonDetailLayoutProps {
  params: { pokemonId: number };
}

async function PoketmonDetailLayout({
  params,
  children,
}: PropsWithChildren<PoketmonDetailLayoutProps>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pokemon", { id: params.pokemonId }],
    queryFn: () => api.getPokemon(params.pokemonId),
    staleTime: Infinity,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default PoketmonDetailLayout;
