import { pokeType } from "@/types/pokemon";
import axios, { AxiosInstance } from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}/api`;

class API {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL });
  }

  async getPokemons(pageParam: any) {
    const response = await this.client.get(`/pokemons?page=${pageParam}`);
    return response.data;
  }

  async getPokemon(pokemonId: number) {
    const response = await this.client.get<pokeType>(`/pokemons/${pokemonId}`);
    return response.data;

    // const data = await fetch(
    //   `http://localhost:3000/api/pokemons/${pokemonId}`,
    //   { cache: "force-cache" }
    // );
    // const pokemon = await data.json();
    // return pokemon;
  }
}

const api = new API();

export default api;
