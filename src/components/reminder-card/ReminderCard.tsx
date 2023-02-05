import { Box, HStack, Text } from "native-base";
import { Pressable, TouchableOpacity } from "react-native";

import { ReminderCardType } from "./ReminderCard.types";

export const ReminderCard = (props: ReminderCardType) => {
  const { content } = props;

  return (
    <Box bg="gray.500" p="4" rounded="2xl" opacity="0.6">
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
