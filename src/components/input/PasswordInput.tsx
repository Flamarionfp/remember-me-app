import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Input } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { PasswordInputProps } from "./Input.types";
import { IconWrapper } from "./components/IconWrapper";

export const PasswordInput = (props: PasswordInputProps) => {
  const { defaultStyle } = props;
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const leftIcon = {
    component: (
      <IconWrapper>
        <FontAwesome name="lock" size={24} color="white" />
      </IconWrapper>
    ),
  };

  const rightIcon = {
    component: (
      <IconWrapper>
        <TouchableOpacity onPress={() => setIsPasswordVisible((prev) => !prev)}>
          <Ionicons
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </IconWrapper>
    ),
  };

  return (
    <Input
      autoComplete="password"
      type="password"
      secureTextEntry={!isPasswordVisible}
      leftElement={leftIcon.component}
      rightElement={rightIcon.component}
      {...defaultStyle}
      {...props}
    />
  );
};
