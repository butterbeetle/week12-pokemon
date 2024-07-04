function PokemonCardSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 animate-pulse">
      <div>
        <div className="relative aspect-square border-2 rounded-lg bg-gray-300"></div>

        <div className="flex flex-col text-xs gap-y-1 justify-center p-2 ">
          <h4 className="border-2 w-10 h-4 bg-gray-300 rounded"></h4>
          <h5 className="border-2 w-16 h-5 bg-gray-300 rounded"></h5>
        </div>
      </div>

      <div className="flex justify-between gap-x-2">
        <div className="border-2 flex-1 w-12 h-6 bg-gray-300 rounded-full px-4 py-1.5"></div>
        <div className="border-2 flex-1 w-12 h-6 bg-gray-300 rounded-full px-4 py-1.5"></div>
      </div>
    </div>
  );
}

export default PokemonCardSkeleton;
