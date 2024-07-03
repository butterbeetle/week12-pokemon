"use client";

import api from "@/api/api";
import { pokemonType } from "@/types/pokemon";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import PokemonSkeletonCard from "./PokemonSkeletonCard";

function PokemonList() {
  const obsRef = useRef<HTMLDivElement>(null);
  // isLoading = 데이터 처음가져올떄?
  // isFetching = 캐싱된 데이터 다시 가져올떄?
  const {
    data: pokemons,
    isFetching, // == isLoading
    hasNextPage, // 다음 페이지 있는지 여부?
    fetchNextPage, // 다음 페이지 가져오는 함수 (queryFn)?
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => api.getPokemons(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      // console.log("LAST PAGE", lastPage); // 현재? api response
      // console.log("LAST PAGE PARAMS", lastPageParam); // 현재 api response 받아올 때 pageParams넣은값?
      // console.log("ALL PAGE", allPage); // 전체 데이터?

      // 현재 length가 있다면 전체 데이터의 길이+1을 해서 page를 늘림
      // allPage는 2중 배열이라 [[page1_data], [page2_data]] 이런식으로 page마다 데이터가 배열로 들어감
      const nextPage = lastPage.length ? allPage.length + 1 : undefined;
      return nextPage;
    },
    initialPageParam: 2,
    select: (data: InfiniteData<pokemonType[], unknown>) =>
      data.pages.flatMap((page) => page),
    staleTime: Infinity,
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        // console.log("ENTRIES___", entries[0], hasNextPage);
        if (entries[0].isIntersecting && hasNextPage) {
          // 따로 인자(pageParams) 같은거 안 넣어줘도 자동으로 넣어주는듯?
          fetchNextPage();
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.9 }
    );

    const currentObs = obsRef.current;

    if (currentObs) {
      obs.observe(currentObs);
    }

    return () => {
      if (currentObs) {
        obs.unobserve(currentObs);
      }
    };
  }, [pokemons, fetchNextPage, hasNextPage]);

  // console.log("POKEMON LIST___", pokemons);
  // console.log("HAS NEXT PAGE___", !isFetching, hasNextPage);
  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
        {pokemons?.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/pokemons/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </li>
        ))}
        {isFetching &&
          Array.from({ length: 20 }).map((_, idx) => (
            <li key={idx}>
              <PokemonSkeletonCard />
            </li>
          ))}
      </ul>
      {!isFetching && hasNextPage && (
        <div ref={obsRef} className="h-20 w-full" />
      )}
    </>
  );
}

export default PokemonList;
