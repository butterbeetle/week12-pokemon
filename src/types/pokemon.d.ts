export type pokemonType = {
  id: number; // id 도감번호?
  height: number; // 키
  weight: number; // 무게
  sprites: {
    front_default: string; // 앞면 이미지
  };
  korean_name: string; // 한국이름
  types: {
    // 타입 풀? 불꽃?
    type: {
      name: string;
    }[];
  };
  abilities: {
    // 특성?
    ability: {
      name: string;
    }[];
  };
  moves: {
    // 기술
    move: {
      name: string;
    }[];
  };
};
