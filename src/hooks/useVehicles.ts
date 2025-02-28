import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../entities/vehicle";
import axios from "axios";

export interface VehiclesReponse {
  count: number;
  data: Vehicle[];
}

interface VehicleQuery {
  page: number;
  pageSize: number;
}

// const fetchVehicles = async (): Promise<Vehicle[]> => {
//   const response = await axios.get<VehiclesReponse>("/data/vehicle-data.json");
//   return response.data.data;
// };

const fetchVehicles = async ({
  queryKey,
}: {
  queryKey: [string, VehicleQuery];
}): Promise<Vehicle[]> => {
  const [, { page, pageSize }] = queryKey; // Extract page & pageSize from queryKey
  const response = await axios.get<VehiclesReponse>("/data/vehicle-data.json");

  // Slice the data based on pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return response.data.data.slice(startIndex, endIndex);
};
interface VehicleQuery {
  page: number;
  pageSize: number;
}
export const useVehicles = (query: VehicleQuery) => {
  return useQuery({
    queryKey: ["vehicles", query],
    queryFn: fetchVehicles,
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true,
  });
};
