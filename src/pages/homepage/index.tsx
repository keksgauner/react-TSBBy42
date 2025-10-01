import { Box, Button, Text, Heading, VStack } from "@chakra-ui/react";

function Home() {
    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
            <VStack gap={8}>
                <Heading size="2xl">A TSBBy42 App</Heading>
                <Text fontSize="xl" maxW="600px" mx="auto">
                    Welcome to TSBBy42 and enjoy this unfinished app
                </Text>
                <Button colorPalette="red" size="lg">
                    HAPPY HACKING
                </Button>
            </VStack>
        </Box>
    );
}

export default Home;
