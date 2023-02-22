import { Box, Spinner, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const {
    text = "",
    isLoading = false,
    /*  disabled = false, */
    onPress = () => null,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Box bg="primary.500" p="4" rounded="lg" {...props}>
        {isLoading ? (
          <Spinner color="white" />
        ) : (
          <Text
            color="white"
            fontSize="md"
            fontWeight="bold"
            textAlign="center"
          >
            {text}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};
