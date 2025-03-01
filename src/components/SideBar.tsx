import {
  Box,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaSort, FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import { useSort } from "../contexts/SortContext";
import { sortOptions } from "../constants";

const SideBar = () => {
  const { sortField, setSortField, sortDirection, toggleSortDirection } =
    useSort();

  const handleSort = (field: string) => {
    if (sortField === field) {
      toggleSortDirection(); // Toggle asc/desc if same field
    } else {
      setSortField(field); // Set new field & reset to asc
    }
  };

  return (
    <VStack alignItems="start" spacing={4} width="100%">
      <Heading fontSize="2xl" paddingLeft={4}>
        Order By
      </Heading>
      <List paddingLeft={5} paddingTop={5} cursor="pointer">
        {sortOptions.map(({ value, label }) => (
          <ListItem key={value} onClick={() => handleSort(value)}>
            <HStack>
              <Text fontSize={20}>{label}</Text>
              <Box width="1.5em">
                {sortField === value &&
                  (sortDirection === "asc" ? (
                    <FaSortAlphaUp />
                  ) : (
                    <FaSortAlphaDown />
                  ))}
              </Box>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default SideBar;
