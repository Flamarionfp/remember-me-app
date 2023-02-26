import { Ionicons } from "@expo/vector-icons";
import { HStack, Text, Checkbox, VStack } from "native-base";
import React from "react";

import { Link, Input, Button } from "@/src/components";
import { Screen, FormWrapper } from "@/src/layouts";

export const Register = () => {
  return (
    <Screen showHeader={false}>
      <FormWrapper title="Crie sua conta para continuar">
        <Input
          placeholder="Nome Completo"
          autoCapitalize="words"
          leftIcon={<Ionicons name="person-sharp" size={24} color="white" />}
        />

        <Input
          keyboardType="number-pad"
          placeholder="Celular"
          leftIcon={<Ionicons name="call" size={24} color="white" />}
        />

        <Input variant="email" />

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
          {/* <HStack justifyContent="center" space={2} my="3">
            <Text color="white">Já possui uma conta?</Text>
            <Link route="Login">Clique aqui</Link>
          </HStack> */}
        </VStack>
      </FormWrapper>
    </Screen>
  );
};
