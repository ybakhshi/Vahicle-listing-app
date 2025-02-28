import {
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaSort } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (sortOder: string) => void;
}
const SideBar = ({ onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "brand", label: "Brand" },
    { value: "condition", label: "Condition" },
    { value: "price", label: "Price" },
    { value: "-year", label: "Year" },
    { value: "location", label: "Location" },
    { value: "model", label: "Modal" },
    { value: "color", label: "Color" },
  ];
  return (
    <VStack>
      <Heading fontSize={"2xl"} textAlign={"left"}>
        Order By
      </Heading>
      <List paddingLeft={5} paddingTop={5} cursor={"pointer"}>
        {sortOrders.map(({ value, label }) => (
          <ListItem key={value} onClick={() => onSelectSortOrder(value)}>
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
