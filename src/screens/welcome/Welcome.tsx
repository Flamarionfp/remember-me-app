import { useNavigation } from "@react-navigation/native";
import { Box, Flex, VStack } from "native-base";

import { Button } from "@/src/components";
import { FormWrapper, Screen } from "@/src/layouts";

export const Welcome = () => {
  const { navigate } = useNavigation();

  return (
    <Screen showHeader={false}>
      <FormWrapper title="Bem vindo(a)!">
        <Flex flex={1} justifyContent="space-between">
          <Box />
          <VStack space={3}>
            <Button
              onPress={() => navigate("Register" as never)}
              text="Criar conta"
              bg="green.500"
            />
            <Button
              onPress={() => navigate("Login" as never)}
              text="Já possui sua conta? Entre agora"
            />
          </VStack>
        </Flex>
      </FormWrapper>
    </Screen>
  );
};
