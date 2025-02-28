import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
      <Image src={logo} height={10} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
