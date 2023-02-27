import { FormControl, Input as NativeBaseInput, TextArea } from "native-base";
import React from "react";

import { DateTimeInput } from "./DateTimeInput";
import { EmailInput } from "./EmailInput";
import { InputProps } from "./Input.types";
import { PasswordInput } from "./PasswordInput";
import { IconWrapper } from "./components/IconWrapper";

import { normalizeInputDateVariant } from "@/src/helpers";

export const Input = (props: InputProps) => {
  const {
    variant = "default",
    error = "",
    touched = false,
    leftIcon = <></>,
  } = props;

  const getInputByVariant = () => {
    if (variant === "email") return <EmailInput {...props} />;

    if (variant === "password") return <PasswordInput {...props} />;

    if (variant === "textArea")
      return <TextArea autoCompleteType="off" {...props} />;

    if (variant === "date" || variant === "time") {
      const dateVariant = normalizeInputDateVariant(variant);

      return <DateTimeInput inputVariant={dateVariant} {...props} />;
    }
    return (
      <NativeBaseInput
        {...props}
        leftElement={<IconWrapper>{leftIcon}</IconWrapper>}
      />
    );
  };

  const hasError = !!error && touched;

  return (
    <>
      <FormControl isInvalid={hasError}>
        {getInputByVariant()}
        {hasError && (
          <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
        )}
      </FormControl>
    </>
  );
};
