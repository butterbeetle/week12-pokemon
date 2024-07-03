import { pokeType } from "@/types/pokemon";
import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3000/api";

class API {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL });
  }

  async getPokemons(pageParam: any) {
    const response = await this.client.get(`/pokemons?page=${pageParam}`);
    // console.log("GET POKEMONS___", response);
    return response.data;
  }

  async getPokemon(pokemonId: number) {
    // console.log("GET POKEMON START___", pokemonId);
    const response = await this.client.get<pokeType>(`/pokemons/${pokemonId}`);
    // console.log("GET POKEMON___", response);
    return response.data;
    // const res = await fetch(`http://localhost:3000/api/pokemons/${pokemonId}`);
    // console.log("RES___", res);
    // const data: pokeType = await res.json();
    // console.log("DATA___", data);
    // return data;
  }
}

const api = new API();

export default api;
