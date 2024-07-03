import api from "@/api/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import Header from "./_components/Header";

async function RootLayout({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.getPokemons(),
    staleTime: Infinity,
  });

  return (
    <div id="root">
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </div>
  );
}

export default RootLayout;
