import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3000/api";

class API {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL });
  }

  async getPokemons() {
    const response = await this.client.get("/pokemons");
    // console.log("GET POKEMONS___", response);
    return response.data;
  }

  async getPokemon(pokemonId: number) {
    // console.log("GET POKEMON START___");
    const response = await this.client.get(`/pokemons/${pokemonId}`);
    // console.log("GET POKEMON___", response);
    return response.data;
  }
}

const api = new API();

export default api;
