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
      name: string;
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
  };
  [];
};
