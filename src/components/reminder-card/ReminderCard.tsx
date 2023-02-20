import { Box, Heading, HStack, Text } from "native-base";

import { ReminderCardType } from "./ReminderCard.types";

export const ReminderCard = (props: ReminderCardType) => {
  const { title, content } = props;

  return (
    <Box bg="gray.500" p="4" rounded="2xl" opacity="0.6">
      <Heading color="white" fontSize="md">
        {title}
      </Heading>
      <Text color="white" noOfLines={3}>
        {content}
      </Text>
      <HStack justifyContent="space-between" mt="4">
        <Text color="white" fontWeight="bold">
          01/02/2023
        </Text>
        <Text color="white" fontWeight="bold">
          11:25
        </Text>
      </HStack>
    </Box>
  );
};
