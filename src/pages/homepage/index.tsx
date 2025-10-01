import {Flex, Heading, Text} from "@chakra-ui/react";

function Homepage() {
  return (
    <>
      <Flex direction={"column"} gap={"4"} alignItems={"center"} justifyContent={"center"} padding={"4"}>
        <Heading>Homepage</Heading>
        <Text>Coming Soon</Text>
      </Flex>
    </>
  )
}

export default Homepage;