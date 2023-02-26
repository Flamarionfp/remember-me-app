import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  KeyboardAvoidingView,
  VStack,
} from "native-base";
import { Platform } from "react-native";

import { FormWrapperProps } from "./FormWrapper.types";

import AppLogo from "@/assets/icon.png";
import { BackButton } from "@/src/components";
export const FormWrapper = (props: FormWrapperProps) => {
  const { title, children } = props;

  return (
    <Box mt="5" flex={1}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <VStack justifyContent="center" flex={1} space={8}>
          <Center>
            <Avatar w="90" h="90" source={AppLogo} />

            {title && (
              <Heading mt="4" color="white" fontSize="2xl">
                {title}
              </Heading>
            )}
          </Center>
          {children}
        </VStack>
      </KeyboardAvoidingView>
    </Box>
  );
};
