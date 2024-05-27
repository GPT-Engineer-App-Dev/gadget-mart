import { Box, Container, VStack, Text, Image, Flex, Heading, Button, SimpleGrid, Link, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Logic to handle search submission, e.g., filter products based on searchQuery
    console.log("Search submitted:", searchQuery);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <InputGroup maxW="400px" mx={4}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearchSubmit();
              }
            }}
          />
          <InputRightElement>
            <Button colorScheme="blue" onClick={handleSearchSubmit}>Search</Button>
          </InputRightElement>
        </InputGroup>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>About Us</Link>
          <Link href="#" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" mb={6} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of product 1.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of product 2.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of product 3.</Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex>
            <Link href="#" mx={2}><FaFacebook /></Link>
            <Link href="#" mx={2}><FaTwitter /></Link>
            <Link href="#" mx={2}><FaInstagram /></Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;