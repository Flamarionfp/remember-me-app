import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { HStack, Text, Checkbox, VStack } from "native-base";
import React from "react";
import { Alert } from "react-native";

import { registerFormSchema } from "./validation";

import { Link, Input, Button } from "@/src/components";
import { formatForOnlyLetters } from "@/src/helpers";
import { formatCellphone } from "@/src/helpers/phone";
import { useAuth } from "@/src/hooks";
import { RegisterFormValues } from "@/src/hooks/use-auth/types";
import { Screen, FormWrapper } from "@/src/layouts";

const initialValues: RegisterFormValues = {
  fullName: "",
  cellphone: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

export const Register = () => {
  const { register } = useAuth();
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await register(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível criar a conta");
    }
  };

  const {
    touched,
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    isSubmitting,
  } = useFormik<RegisterFormValues>({
    validateOnBlur: true,
    initialValues,
    validationSchema: registerFormSchema,
    onSubmit,
  });

  const changeFormat = (
    field: string,
    value: string,
    formatter: (value: string) => string
  ) => {
    const formattedValue = formatter(value);

    setFieldValue(field, formattedValue);
  };

  return (
    <Screen showHeader={false}>
      <FormWrapper showBackButton title="Crie sua conta para continuar">
        <Input
          placeholder="Nome Completo"
          autoCapitalize="words"
          value={values.fullName}
          onBlur={() => setFieldTouched("fullName")}
          error={errors?.fullName}
          touched={touched?.fullName}
          leftIcon={<Ionicons name="person-sharp" size={24} color="white" />}
          onChangeText={(text) =>
            changeFormat("fullName", text, formatForOnlyLetters)
          }
        />

        <Input
          value={values.cellphone}
          onBlur={() => setFieldTouched("cellphone")}
          error={errors?.cellphone}
          touched={touched?.cellphone}
          keyboardType="number-pad"
          placeholder="Celular"
          maxLength={15}
          leftIcon={<Ionicons name="call" size={24} color="white" />}
          onChangeText={(text) => {
            changeFormat("cellphone", text, formatCellphone);
          }}
        />

        <Input
          variant="email"
          value={values.email}
          onBlur={() => setFieldTouched("email")}
          onChangeText={(text) => setFieldValue("email", text)}
          error={errors?.email}
          touched={touched?.email}
        />

        <Input
          placeholder="Senha"
          variant="password"
          value={values.password}
          onBlur={() => setFieldTouched("password")}
          onChangeText={(text) => setFieldValue("password", text)}
          touched={touched?.password}
          error={errors?.password}
        />

        <Input
          placeholder="Confirmar Senha"
          variant="password"
          value={values.confirmPassword}
          onBlur={() => setFieldTouched("confirmPassword")}
          onChangeText={(text) => setFieldValue("confirmPassword", text)}
          touched={touched?.confirmPassword}
          error={errors?.confirmPassword}
        />

        <HStack space={2} px="1">
          <Checkbox value={String(values.agreeTerms)} color="primary.500">
            <HStack space={1}>
              <Text color="white">Concordo com os</Text>
              <Link route="/">termos</Link>
              <Text color="white">e</Text>
              <Link route="/">politicas</Link>
              <Text color="white">do app</Text>
            </HStack>
          </Checkbox>
        </HStack>

        <VStack space={3} mb="2">
          <Button
            onPress={() => handleSubmit()}
            isLoading={isSubmitting}
            disabled={isSubmitting}
            text="Criar conta"
          />
        </VStack>
      </FormWrapper>
    </Screen>
  );
};
