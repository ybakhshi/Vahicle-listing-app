import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "../pages/vehicle-list-page/components/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={logo} width={160} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
