import { Container, Flex, Image, Box, VStack, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="100px" />
      </Flex>
      <Box>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to YouTube</Text>
          <Text>Explore videos, channels, and more.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;