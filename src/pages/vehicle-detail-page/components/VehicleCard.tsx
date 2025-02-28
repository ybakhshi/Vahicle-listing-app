import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Vehicle } from "../../../entities/vehicle";

interface Props {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: Props) => {
  console.log("images");
  return (
    <Card borderRadius={5} overflow={"hidden"}>
      <Image
        src={vehicle.images[0]}
        alt={`${vehicle.brand} ${vehicle.model}`}
        objectFit="cover"
        mx="auto"
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{vehicle.brand}</Heading>
      </CardBody>
    </Card>
  );
};

export default VehicleCard;
