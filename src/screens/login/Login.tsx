import { useFormik } from "formik";
import { Text, HStack, Divider } from "native-base";
import { Alert } from "react-native";

import { LoginFormValues } from "./Login.types";
import { loginFormSchema } from "./validation";

import { Button, Input, Link, SocialButton } from "@/src/components";
import { useAuth } from "@/src/hooks";
import { FormWrapper, Screen } from "@/src/layouts";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};
export const Login = () => {
  const { login } = useAuth();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível fazer login");
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
  } = useFormik<LoginFormValues>({
    validateOnBlur: true,
    initialValues,
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return (
    <Screen showHeader={false}>
      <FormWrapper title="Faça seu login para continuar">
        <Input
          value={values.email}
          onBlur={() => setFieldTouched("email")}
          onChangeText={(text) => setFieldValue("email", text)}
          variant="email"
          error={errors?.email}
          touched={touched?.email}
        />
        <Input
          value={values.password}
          onBlur={() => setFieldTouched("password")}
          onChangeText={(text) => setFieldValue("password", text)}
          placeholder="Senha"
          variant="password"
          touched={touched?.password}
          error={errors?.password}
        />
        <Button
          onPress={() => handleSubmit()}
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
