import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../entities/vehicle";
import axios from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Vehicle>("/data/vehicle-data.json");
interface VehicleQuery {
  page: number;
  pageSize: number;
}

// const fetchVehicles = async ({
//   queryKey,
// }: {
//   queryKey: [string, VehicleQuery];
// }): Promise<Vehicle[]> => {
//   const [, { page, pageSize }] = queryKey; // Extract page & pageSize from queryKey
//   const response = await axios.get<FetchResponse>("/data/vehicle-data.json");

//   // Slice the data based on pagination
//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   return response.data.data.slice(startIndex, endIndex);
// };

interface VehicleQuery {
  page: number;
  pageSize: number;
}
export const useVehicles = (query: VehicleQuery) => {
  return useQuery({
    queryKey: ["vehicles", query],
    queryFn: async () => {
      const data = await apiClient.getAll();
      const startIndex = (query.page - 1) * query.pageSize;
      const endIndex = startIndex + query.pageSize;
      return data.data.slice(startIndex, endIndex);
    },
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true,
  });
};
