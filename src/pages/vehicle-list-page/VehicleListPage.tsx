import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";
import VehicleCard from "./components/VehicleCard";
import { useNavigate } from "react-router-dom";
import VehicleCardSkeleton from "./components/VehicleCardSkeleton";
import { SKELETONS, VEHICLE_INFO } from "../../constants";

interface Props {
  searchKey: string;
}
const VehicleListPage = ({ searchKey }: Props) => {
  const { data: vehicles, isLoading, error } = useVehicles();
  const navigate = useNavigate();

  const normalizedSearchKey = searchKey.toLowerCase();

  // Filter vehicles based on the search key matching specified fields
  const filteredVehicles =
    searchKey.length > 0
      ? vehicles?.filter((vehicle) =>
          VEHICLE_INFO.some((field) =>
            vehicle[field as keyof typeof vehicle]
              ?.toString()
              .toLowerCase()
              .includes(normalizedSearchKey)
          )
        )
      : vehicles;

  if (error) return <Text>Error loading data</Text>;

  //to make displaying images responsive, use columns:
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={"10px"}
    >
      {isLoading &&
        SKELETONS.map((skeleton) => {
          return <VehicleCardSkeleton key={skeleton} />;
        })}
      {filteredVehicles?.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onCardClick={() => navigate(`/vehicle/${vehicle.id}`)}
        />
      ))}
    </SimpleGrid>
  );
};

export default VehicleListPage;
