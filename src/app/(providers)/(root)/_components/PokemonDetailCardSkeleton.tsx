export default function PokemonDetailCardSkeleton() {
  return (
    <div className="w-full border-4 border-black flex flex-col md:flex-row items-center p-4 animate-pulse">
      <div className="relative aspect-square w-1/2 bg-gray-200 "></div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col text-xs gap-y-1 justify-center items-center md:items-start p-2">
          <div className="h-4 bg-gray-200 rounded w-20 "></div>
          <div className="h-6 bg-gray-200 rounded w-40 "></div>
        </div>
        <div className="w-full border rounded-lg p-4 divide-y divide-gray-300">
          <div className="grid grid-cols-3 p-2 gap-x-4">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 bg-gray-200 rounded w-10 "></div>
              <div className="flex flex-col gap-y-2">
                <div className="h-6 bg-gray-200 py-1.5 rounded-full w-full "></div>
                <div className="h-6 bg-gray-200 py-1.5 rounded-full w-full "></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="h-4 bg-gray-200 rounded w-10 "></div>
              <div className="h-6 bg-gray-200 rounded w-20 "></div>
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="h-4 bg-gray-200 rounded w-10 "></div>
              <div className="h-6 bg-gray-200 rounded w-20 "></div>
            </div>
          </div>

          <div className="flex flex-col p-2 gap-y-2">
            <div className="h-4 bg-gray-200 rounded w-10 "></div>
            <div className="flex gap-x-4">
              <div className="h-6 bg-gray-200 rounded w-20 "></div>
              <div className="h-6 bg-gray-200 rounded w-20 "></div>
            </div>
          </div>

          <div className="flex flex-col p-2 gap-y-2">
            <div className="h-4 bg-gray-200 rounded w-10 "></div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              {Array.from({ length: 30 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-6 bg-gray-200 rounded w-full "
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
