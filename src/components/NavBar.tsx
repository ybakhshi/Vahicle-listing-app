import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <HStack paddingLeft={2}>
      <Image src={logo} height={10} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
