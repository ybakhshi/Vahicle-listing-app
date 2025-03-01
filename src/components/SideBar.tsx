import {
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaSort } from "react-icons/fa";
import { useSort } from "../contexts/SortContext";
import { sortOptions } from "../constants";

const SideBar = () => {
  const { sortField, setSortField, toggleSortDirection } = useSort();

  const handleSort = (field: string) => {
    if (sortField === field) {
      toggleSortDirection(); // Toggle asc/desc if same field
    } else {
      setSortField(field); // Set new field & reset to asc
    }
  };

  return (
    <VStack>
      <Heading fontSize={"2xl"} textAlign={"left"}>
        Order By
      </Heading>
      <List paddingLeft={5} paddingTop={5} cursor={"pointer"}>
        {sortOptions.map(({ value, label }) => (
          <ListItem key={value} onClick={() => handleSort(value)}>
            <HStack>
              <Text fontSize={24}>{label}</Text>
              <FaSort />
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default SideBar;
