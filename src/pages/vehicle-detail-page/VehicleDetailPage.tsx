import { useNavigate, useParams } from "react-router-dom";
import { useVehicle } from "../../hooks/useVehicle";
import {
  Box,
  Heading,
  Spinner,
  Text,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data: vehicle, isLoading, error } = useVehicle(parseInt(id!));

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading vehicle details</Text>;
  if (!vehicle) return <Text>Vehicle not found</Text>;

  return (
    <VStack>
      <Box p={4}>
        <Heading>
          {vehicle.brand} {vehicle.model}
        </Heading>
        <Text>Year: {vehicle.year}</Text>
        <Text>Price: ${vehicle.price}</Text>
        <Text>Range: {vehicle.range_km} km</Text>
        <Text>Battery: {vehicle.battery_capacity_kWh} kWh</Text>
        <Text>Charging Speed: {vehicle.charging_speed_kW} kW</Text>
        <Text>Location: {vehicle.location}</Text>
        {vehicle.images.length > 0 && (
          <Image src={vehicle.images[0]} alt={vehicle.model} mt={4} />
        )}
      </Box>
      <Button onClick={() => navigate("/")}>Back</Button>
    </VStack>
  );
};

export default VehicleDetailPage;
