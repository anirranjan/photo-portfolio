// Navbar.js
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaInstagram } from "react-icons/fa";

const Links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact"},
];

const NavLink = (props) => {
  const { children, to } = props;

  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      href={to}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Image boxSize='50px' src="./new-logo-final.png" alt="logo"/>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            <Link href="https://www.instagram.com/nirranjan.media/" isExternal>
              <IconButton
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="ghost"
                size="md"
              />
            </Link>
          </HStack>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            <Link href="https://www.instagram.com/nirranjan.media/" isExternal>
              <IconButton
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="ghost"
                size="md"
              />
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
