import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../entities/vehicle";

import APIClient from "../services/api-client";

const apiClient = new APIClient<Vehicle>("/data/vehicle-data.json");

// const fetchVehicle = async (id: number) => {
//   const response = await axios.get<FetchResponse>("/data/vehicle-data.json");
//   return response.data.data.find((v: Vehicle) => v.id === id);
// };

// the custom hook
export const useVehicle = (id: number) => {
  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => apiClient.getOne(id),
    staleTime: 1 * 60 * 1000, // 1m
  });
};
