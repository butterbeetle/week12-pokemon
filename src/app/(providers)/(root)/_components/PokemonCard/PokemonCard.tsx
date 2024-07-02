import { pokemonType } from "@/types/pokemon";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: pokemonType;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <div className="relative aspect-square border-2 rounded-lg">
          <Image
            fill
            className="object-contain"
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
          ></Image>
        </div>

        <div className="flex flex-col text-xs gap-y-1 justify-center p-2 ">
          <h4 className="text-gray-400">
            No.{`${(pokemon.id + "").padStart(4, "0")}`}
          </h4>
          <h5 className="text-base font-bold">{pokemon.korean_name}</h5>
        </div>
      </div>

      <div className="flex justify-between">
        {pokemon.types.map(({ type: { name } }) => (
          <div className="text-xs rounded-md px-8 py-1 border" key={name}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
