import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { text = "" } = props;

  return (
    <TouchableOpacity onPress={() => null}>
      <Box bg="primary.500" p="4" rounded="lg">
        <Text color="white" fontSize="md" fontWeight="bold" textAlign="center">
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
