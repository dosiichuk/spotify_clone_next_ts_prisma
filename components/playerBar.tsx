import { Box, Flex, Text } from "@chakra-ui/layout";

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="20px" color="white">
          <Text>Song name</Text>
          <Text>Artist name</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
