import axios, { AxiosInstance } from "axios";

const baseURL = "/api";

class API {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL });
  }

  async getPokemon() {
    const response = await this.client.get("/pokemons");
    console.log("GET POKEMON___", response);
    return response.data;
  }
}

const api = new API();

export default api;
