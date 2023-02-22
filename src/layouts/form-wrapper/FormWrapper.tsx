import { Avatar, Box, Center, Heading, VStack } from "native-base";

import { FormWrapperProps } from "./FormWrapper.types";

import AppLogo from "@/assets/icon.png";
export const FormWrapper = (props: FormWrapperProps) => {
  const { title, children } = props;

  return (
    <Box mt="5" flex={1}>
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
    </Box>
  );
};
