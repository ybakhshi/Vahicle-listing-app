import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";
import VehicleCard from "../vehicle-detail-page/components/VehicleCard";

const VehicleListPage = () => {
  const { data, isLoading, error } = useVehicles();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading data</Text>;

  //to make displaying images responsive, use columns:
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={"10px"}
    >
      {data?.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </SimpleGrid>
  );
};

export default VehicleListPage;
