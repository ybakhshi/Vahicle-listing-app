import axios from "axios";
import { Vehicle } from "../entities/vehicle";

interface FetchResponse<T> {
  count: number;
  data: T[];
}

class APIClient<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Fetch paginated list of data
  async getAll(params?: Record<string, any>): Promise<FetchResponse<T>> {
    const response = await axios.get<FetchResponse<T>>(this.baseUrl, {
      params,
    });

    console.log(params);
    return response.data;
  }

  // Fetch a single item by ID
  async getOne(id: number): Promise<T | undefined> {
    const response = await axios.get<FetchResponse<T>>(this.baseUrl);
    return response.data.data.find((item) => (item as any).id === id);
  }
}

export default APIClient;
