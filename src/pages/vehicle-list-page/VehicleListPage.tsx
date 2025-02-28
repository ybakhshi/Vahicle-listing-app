import { Spinner, Text } from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";

const VehicleListPage = () => {
  const { data, isLoading, error } = useVehicles();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading data</Text>;

  return <div>VehicleListPage</div>;
};

export default VehicleListPage;
