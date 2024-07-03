type PokemonTypes =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type pokemonType = {
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  korean_name: string;
  types: {
    type: {
      name: PokemonTypes;
      korean_name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
};

export type pokeType = {
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  korean_name: {
    name: string;
  };
  types: {
    type: {
      name: PokemonTypes;
      korean_name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      korean_name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      korean_name: string;
    };
  }[];
};

export type pokemonTypesName = { language: { name: string } };
