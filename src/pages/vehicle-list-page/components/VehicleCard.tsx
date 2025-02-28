import { Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Vehicle } from "../../../entities/vehicle";

interface Props {
  vehicle: Vehicle;
  onCardClick: () => void;
}

const VehicleCard = ({ vehicle, onCardClick }: Props) => {
  return (
    <Card
      borderRadius={5}
      overflow={"hidden"}
      cursor="pointer"
      onClick={onCardClick}
      _hover={{ boxShadow: "lg" }}
    >
      <Image
        src={vehicle.images[0]}
        alt={`${vehicle.brand} ${vehicle.model}`}
        objectFit="cover"
        mx="auto"
      />
      <CardBody>
        <Heading fontSize={"2xl"}>
          {vehicle.brand} {vehicle.model}
        </Heading>
        <VStack align="start" mt={2}>
          <Text>Year: {vehicle.year}</Text>
          <Text>Price: ${vehicle.price}</Text>
          <Text>Condition: {vehicle.condition}</Text>
          <Text>Location: {vehicle.location}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default VehicleCard;
