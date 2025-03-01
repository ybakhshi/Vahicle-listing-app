import {
  Button,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";
import VehicleCard from "./components/VehicleCard";
import { useNavigate } from "react-router-dom";
import VehicleCardSkeleton from "./components/VehicleCardSkeleton";
import { SKELETONS, VEHICLE_INFO } from "../../constants";
import { useMemo, useState } from "react";
import _ from "lodash";
import { useSort } from "../../contexts/SortContext";

interface Props {
  searchKey: string;
}
const VehicleListPage = ({ searchKey }: Props) => {
  const { sortField, sortDirection } = useSort();
  const pageSize = 7;
  const [page, setPage] = useState(1);

  const { data: vehicles, isLoading, error } = useVehicles({ page, pageSize });
  const navigate = useNavigate();

  const normalizedSearchKey = searchKey.toLowerCase();

  const filteredVehicles = useMemo(() => {
    if (!vehicles) return [];
    return vehicles.filter((vehicle) =>
      VEHICLE_INFO.some((field) =>
        vehicle[field as keyof typeof vehicle]
          ?.toString()
          .toLowerCase()
          .includes(normalizedSearchKey)
      )
    );
  }, [vehicles, searchKey]);

  const sortedVehicles = useMemo(() => {
    if (!filteredVehicles) return [];
    if (!sortField) return filteredVehicles; // Return unsorted if no sort field selected
    return _.orderBy(vehicles, [sortField], [sortDirection]);
  }, [filteredVehicles, sortField, sortDirection]);

  if (error) return <Text>Error loading data</Text>;

  //to make displaying images responsive, use columns:
  return (
    <VStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={"10px"}
      >
        {isLoading &&
          SKELETONS.map((skeleton) => {
            return <VehicleCardSkeleton key={skeleton} />;
          })}
        {sortedVehicles?.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onCardClick={() => navigate(`/vehicle/${vehicle.id}`)}
          />
        ))}
      </SimpleGrid>
      <HStack marginTop={5}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button disabled={page === 7} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

export default VehicleListPage;
