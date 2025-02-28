import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../entities/vehicle";
import axios from "axios";

interface VehiclesReponse {
  count: number;
  data: Vehicle[];
}

const fetchVehicles = async (): Promise<Vehicle[]> => {
  const response = await axios.get<VehiclesReponse>("/data/vehicle-data.json");
  console.log(response);
  return response.data.data;
};

export const useVehicles = () => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });
};
