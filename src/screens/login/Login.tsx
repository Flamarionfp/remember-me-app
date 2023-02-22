import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Box, Text, HStack, Divider } from "native-base";
import { useState } from "react";

import GogleIcon from "../../../assets/icons/google-icon.svg";

import { Button, Input, Link, RoundedButton } from "@/src/components";
import { FormWrapper, Screen } from "@/src/layouts";

export const Login = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = async () => {
    try {
      setIsProcessing(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Screen showHeader={false}>
      <FormWrapper title="Faça seu login para continuar">
        <Input
          placeholder="E-mail"
          autoComplete="email"
          leftElement={
            <Box px="3">
              <MaterialIcons name="email" size={24} color="white" />
            </Box>
          }
        />
        <Input placeholder="Senha" variant="password" />

        <Button
          onPress={() => handleLogin()}
          isLoading={isProcessing}
          disabled={isProcessing}
          text="Entrar"
        />

        <HStack space={2} alignItems="center">
          <Divider w="45%" />
          <Text color="white">OU</Text>
          <Divider w="45%" />
        </HStack>

        <HStack justifyContent="center" space={6}>
          <RoundedButton
            icon={<GogleIcon />}
            onPress={() => null}
            bg="white"
            p="4"
          />
          <RoundedButton
            icon={<FontAwesome name="facebook-f" size={24} color="white" />}
            bg="#3b5998"
            p="4"
            onPress={() => null}
          />
        </HStack>

        <HStack justifyContent="center" space={2}>
          <Text color="white">Ainda não possui uma conta?</Text>
          <Link route="Register">Clique aqui</Link>
        </HStack>
      </FormWrapper>
    </Screen>
  );
};
