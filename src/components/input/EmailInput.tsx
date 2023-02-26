import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "native-base";

import { EmailInputProps } from "./Input.types";
import { IconWrapper } from "./components/IconWrapper";

export const EmailInput = (props: EmailInputProps) => {
  return (
    <Input
      placeholder="E-mail"
      autoComplete="email"
      keyboardType="email-address"
      leftElement={
        <IconWrapper>
          <MaterialIcons name="email" size={24} color="white" />
        </IconWrapper>
      }
      {...props}
    />
  );
};
