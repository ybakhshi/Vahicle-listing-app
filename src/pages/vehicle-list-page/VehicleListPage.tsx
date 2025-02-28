import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";
import VehicleCard from "./components/VehicleCard";
import { useNavigate } from "react-router-dom";
import VehicleCardSkeleton from "./components/VehicleCardSkeleton";

const VehicleListPage = () => {
  const { data: vehicles, isLoading, error } = useVehicles();
  const navigate = useNavigate();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>Error loading data</Text>;

  //to make displaying images responsive, use columns:
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={"10px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => {
          return <VehicleCardSkeleton key={skeleton} />;
        })}
      {vehicles?.map((vehicle) => (
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
