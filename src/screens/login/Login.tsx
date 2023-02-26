import { yupResolver } from "@hookform/resolvers/yup";
import { Text, HStack, Divider } from "native-base";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { LoginFormValues } from "./Login.types";
import { loginFormSchema } from "./validation";

import { Button, Input, Link, SocialButton } from "@/src/components";
import { FormWrapper, Screen } from "@/src/layouts";

const intialValues: LoginFormValues = {
  email: "",
  password: "",
};
export const Login = () => {
  const {
    watch,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<LoginFormValues>({
    defaultValues: intialValues,
    resolver: yupResolver(loginFormSchema),
  });

  useEffect(() => {
    const fields = Object.keys(intialValues) as (keyof LoginFormValues)[];

    fields.forEach((field) => {
      register(field);
    });
  }, []);

  console.log("errors", errors);
  console.log("touchedFields", touchedFields);
  console.log("watch", watch());

  const onInvalid = (errors: FieldErrors<LoginFormValues>) => {
    console.error("errors", errors);
  };

  const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log("data", data);
      reset();
    } catch (error) {
      console.error(error); // integrate error message
    }
  };

  return (
    <Screen showHeader={false}>
      <FormWrapper title="Faça seu login para continuar">
        <Input
          value={getValues("email")}
          onChangeText={(text) => setValue("email", text)}
          variant="email"
          error={errors.email?.message}
        />
        <Input
          value={getValues("password")}
          onChangeText={(text) => setValue("password", text)}
          placeholder="Senha"
          variant="password"
          error={errors.password?.message}
        />
        <Button
          onPress={() => handleSubmit(onSubmit, onInvalid)}
          isLoading={isSubmitting}
          disabled={isSubmitting}
          text="Entrar"
        />
        <HStack space={2} alignItems="center">
          <Divider w="45%" />
          <Text color="white">OU</Text>
          <Divider w="45%" />
        </HStack>
        <HStack justifyContent="center" space={6}>
          <SocialButton socialService="google" onPress={() => null} />
          <SocialButton socialService="facebook" onPress={() => null} />
        </HStack>
        <HStack justifyContent="center" space={2}>
          <Text color="white">Ainda não possui uma conta?</Text>
          <Link route="Register">Clique aqui</Link>
        </HStack>
      </FormWrapper>
    </Screen>
  );
};
