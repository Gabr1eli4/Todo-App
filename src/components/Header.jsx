import { Flex, Heading } from "@chakra-ui/react";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

function Header() {
  return (
    <Flex px={4} py={5} alignItems="center" justifyContent="space-between">
      <Heading fontWeight="600" letterSpacing={8} color="white">
        TODO
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  );
}

export { Header };
