import axios from "axios";
import { ICat } from "../types/types";

export default class CatService {
  constructor(private apiPath = process.env.REACT_APP_API_PATH, private apiKey = process.env.REACT_APP_API_KEY) {}

  async fetch(count: number): Promise<ICat[]> {
    const newCats: ICat[] = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.get(`${this.apiPath}/v1/images/search`);
      newCats.push(response.data[0]);
    }
    return newCats;
  }

  async addToFavourite(image_id: string): Promise<void> {
    await axios.post(
      `${this.apiPath}/v1/favourites`,
      { image_id },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.apiKey ? this.apiKey : "",
        },
      }
    );
  }

  async getFavourites(): Promise<ICat[]> {
    const response = await axios.get(`${this.apiPath}/v1/favourites`, {
      headers: { "x-api-key": this.apiKey ? this.apiKey : "" },
    });
    return response.data.map((cat: { image: any }) => cat.image);
  }
}
