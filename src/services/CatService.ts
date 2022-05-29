import axios from "axios";
import { ICat } from "../types/types";

export default class CatService {
  constructor(private apiPath = process.env.REACT_APP_API_PATH, private apiKey = process.env.REACT_APP_API_KEY) {}

  async fetch(limit: number, page: number): Promise<Promise<ICat[]> | Error> {
    const response = await axios.get(`${this.apiPath}/v1/images/search`, { params: { limit, page } });
    return response.data;
  }

  // that's for future when favourite cats will not be saved on client
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
