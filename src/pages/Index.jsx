import { Box, Container, VStack, Text, Image, Flex, Heading, Button, SimpleGrid, Link, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Logic to handle search submission, e.g., filter products based on searchQuery
    console.log("Search submitted:", searchQuery);
  };

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedBrand ? product.brand === selectedBrand : true) &&
        product.rating >= selectedRating
      );
    });
  };

  const products = [
    { id: 1, name: "Product 1", price: 100, brand: "Brand A", rating: 4, description: "Description of product 1." },
    { id: 2, name: "Product 2", price: 200, brand: "Brand B", rating: 5, description: "Description of product 2." },
    { id: 3, name: "Product 3", price: 300, brand: "Brand A", rating: 3, description: "Description of product 3." },
  ];

  const filteredProducts = filterProducts(products);

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

      {/* Filter Options Section */}
      <Box as="section" py={10}>
        <Heading size="xl" mb={6} textAlign="center">Filter Products</Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text>Price Range</Text>
            <InputGroup>
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              />
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text>Brand</Text>
            <Input
              placeholder="Brand"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Rating</Text>
            <Input
              type="number"
              placeholder="Rating"
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
            />
          </Box>
        </VStack>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" mb={6} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text mb={4}>Price: ${product.price}</Text>
                <Text mb={4}>Brand: {product.brand}</Text>
                <Text mb={4}>Rating: {product.rating}</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
          ))}
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