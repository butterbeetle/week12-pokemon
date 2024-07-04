const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}/api`;

class API {
  constructor() {}

  async getPokemons(pageParam: number) {
    // const response = await this.client.get(`/pokemons?page=${pageParam}`);
    // return response.data;

    const data = await fetch(
      `${baseURL}/pokemons?page=${pageParam}`,
      // { cache: "force-cache" } // default, ssg
      { cache: "no-store" }
    );
    const pokemon = await data.json();
    return pokemon;
  }

  async getPokemon(pokemonId: number) {
    // const response = await this.client.get<pokeType>(`/pokemons/${pokemonId}`);
    // return response.data;

    const data = await fetch(
      `${baseURL}/pokemons/${pokemonId}`,
      // { cache: "force-cache" }
      { cache: "no-store" } // ssr
      // { next: { revalidate: 10} } // isr
    );
    const pokemon = await data.json();
    return pokemon;
  }
}

const api = new API();

export default api;
