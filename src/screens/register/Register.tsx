import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Text, Checkbox, VStack } from "native-base";
import React from "react";

import { Link, Input, Button } from "@/src/components";
import { Screen, FormWrapper } from "@/src/layouts";

export const Register = () => {
  const { navigate } = useNavigation();

  return (
    <Screen showHeader={false}>
      <FormWrapper title="Crie sua conta para continuar">
        <Input
          placeholder="E-mail"
          autoComplete="email"
          leftElement={
            <Box px="3">
              <MaterialIcons name="email" size={24} color="white" />
            </Box>
          }
        />

        <Input
          placeholder="Nome Completo"
          leftElement={
            <Box px="3">
              <Ionicons name="person-sharp" size={24} color="white" />
            </Box>
          }
        />

        <Input placeholder="Senha" variant="password" />
        <Input placeholder="Confirmar Senha" variant="password" />

        <HStack space={2} px="1">
          <Checkbox value="no" color="primary.500">
            <HStack space={1}>
              <Text color="white">Concordo com os</Text>
              <Link route="/">termos</Link>
              <Text color="white">e</Text>
              <Link route="/">politicas</Link>
              <Text color="white">do app</Text>
            </HStack>
          </Checkbox>
        </HStack>

        <VStack space={3}>
          <Button onPress={() => null} text="Criar conta" />
          <Button
            bg="green.700"
            onPress={() => navigate("Login" as never)}
            text="Voltar para o login"
            p="2"
          />
        </VStack>
      </FormWrapper>
    </Screen>
  );
};
