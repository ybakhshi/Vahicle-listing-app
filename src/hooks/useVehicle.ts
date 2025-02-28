import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../entities/vehicle";
import axios from "axios";
import { VehiclesReponse } from "./useVehicles";

const fetchVehicle = async (id: number) => {
  const response = await axios.get<VehiclesReponse>("/data/vehicle-data.json");

  return response.data.data.find((v: Vehicle) => v.id === id);
};

// the custom hook
export const useVehicle = (id: number) => {
  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => fetchVehicle(id),
  });
};
