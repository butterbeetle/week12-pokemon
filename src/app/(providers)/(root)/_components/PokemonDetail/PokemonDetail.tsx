import { pokeType } from "@/types/pokemon";
import Image from "next/image";
import Chip from "../Chip";

function PokemonDetail({ pokemon }: { pokemon: pokeType }) {
  return (
    <div className="w-full border-4 border-black flex flex-col md:flex-row items-center p-4">
      <div className="relative aspect-square size-1/2">
        <Image
          sizes="180px"
          priority
          src={pokemon.sprites.front_default}
          fill
          className="object-cover"
          alt={pokemon.korean_name.name}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col text-xs gap-y-1 justify-center items-center md:items-start p-2 ">
          <h4 className="text-gray-400">
            No.{`${(pokemon.id + "").padStart(4, "0")}`}
          </h4>
          <h5 className="text-xl font-bold">{pokemon.korean_name.name}</h5>
        </div>
        <div className="w-full border rounded-lg p-4 divide-y-[1px]">
          <div className="grid grid-cols-3 p-2 gap-x-4">
            <div className="flex flex-col  gap-y-2">
              <p className="text-xs text-gray-400">타입</p>
              <div className="flex gap-x-2">
                {pokemon.types.map(({ type }) => (
                  <Chip key={type.name} type={type.name} />
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xs text-gray-400">키</p>
              <p className="my-auto">{(pokemon.height / 10).toFixed(1)}m</p>
            </div>

            <div className="flex flex-col">
              <p className="text-xs text-gray-400">몸무게</p>
              <p className="my-auto">{(pokemon.weight / 10).toFixed(1)}kg</p>
            </div>
          </div>

          <div className="flex flex-col p-2 gap-y-2">
            <p className="text-xs text-gray-400">특성</p>
            <div className="flex gap-x-4">
              {pokemon.abilities.map(({ ability }) => (
                <div key={ability.korean_name}>{ability.korean_name}</div>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-2 gap-y-2">
            <p className="text-xs text-gray-400">기술</p>
            <div className="grid grid-cols-3">
              {pokemon.moves.map(({ move }) => (
                <div key={move.korean_name}>{move.korean_name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
