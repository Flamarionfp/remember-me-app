import { Box, Text } from "native-base";

export const Home = () => {
  return (
    <Box bg="gray.800" flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        Hello Expo RN Boilerplate
      </Text>
    </Box>
  );
};
