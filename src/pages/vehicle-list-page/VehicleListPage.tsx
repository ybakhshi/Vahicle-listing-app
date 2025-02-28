import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useVehicles } from "../../hooks/useVehicles";
import VehicleCard from "./components/VehicleCard";
import { useNavigate } from "react-router-dom";
import VehicleCardSkeleton from "./components/VehicleCardSkeleton";
import { SKELETONS, VEHICLE_INFO } from "../../constants";
import { sortVehicles } from "../../utils/sort-vehicles";
import { useMemo, useState } from "react";
import _ from "lodash";

interface Props {
  searchKey: string;
  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
}
const VehicleListPage = ({ searchKey, sortField, setSortField }: Props) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const { data: vehicles, isLoading, error } = useVehicles();
  const navigate = useNavigate();

  const normalizedSearchKey = searchKey.toLowerCase();

  // Filter vehicles based on the search key matching specified fields
  // const filteredVehicles =
  //   searchKey.length > 0
  //     ? vehicles?.filter((vehicle) =>
  //         VEHICLE_INFO.some((field) =>
  //           vehicle[field as keyof typeof vehicle]
  //             ?.toString()
  //             .toLowerCase()
  //             .includes(normalizedSearchKey)
  //         )
  //       )
  //     : vehicles;

  const filteredVehicles = useMemo(() => {
    if (!vehicles) return [];
    return vehicles.filter((vehicle) =>
      ["brand", "condition", "location", "year", "color", "model"].some(
        (field) =>
          vehicle[field as keyof typeof vehicle]
            ?.toString()
            .toLowerCase()
            .includes(normalizedSearchKey)
      )
    );
  }, [vehicles, searchKey]);

  const sortedVehicles = useMemo(() => {
    if (!sortField) return filteredVehicles; // Return unsorted if no sort field is selected
    return _.orderBy(filteredVehicles, [sortField], [sortDirection]);
  }, [filteredVehicles, sortField, sortDirection]);

  // Handle sorting toggle
  const handleSort = (field: string) => {
    if (sortField === field) {
      // Toggle between 'asc' and 'desc' if the same field is clicked
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default to 'asc'
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Apply sorting to the filtered vehicles
  // const sortedVehicles =
  //   sortOrder.length > 0
  //     ? sortVehicles(filteredVehicles!, sortOrder)
  //     : filteredVehicles;

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
      {sortedVehicles?.map((vehicle) => (
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
