import axios from "axios";
import { ICat } from "../types/types";

export default class CatService {
  constructor(private apiPath = process.env.API_PATH) {}

  async fetch(count: number): Promise<ICat[]> {
    const newCats: ICat[] = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      newCats.push(response.data[0]);
    }
    return newCats;
  }

  async addToFavourite(id: number) {}
}
