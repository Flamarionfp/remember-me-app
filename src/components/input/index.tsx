import { Input as NativeBaseInput, TextArea } from "native-base";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import React from "react";

import { DateTimeInput } from "./DateTimeInput";
import { DateInputVariant, InputProps } from "./Input.types";
import { PasswordInput } from "./PasswordInput";

const FOCUS_FIELD_STYLE: IInputProps = {
  opacity: 0.8,
  backgroundColor: "white",
  color: "black",
  borderWidth: 1,
  borderColor: "primary.500",
  placeholderTextColor: "gray.800",
};

const DEFAULT_STYLE: IInputProps = {
  bg: "gray.500",
  color: "white",
  opacity: "0.6",
  borderWidth: 0,
  placeholderTextColor: "white",
  rounded: "md",
  p: "3",
  _focus: FOCUS_FIELD_STYLE,
};

export const Input = (props: InputProps) => {
  const { variant = "default" } = props;

  if (variant === "password")
    return <PasswordInput defaultStyle={DEFAULT_STYLE} {...props} />;

  if (variant === "textArea")
    return <TextArea autoCompleteType="off" {...DEFAULT_STYLE} {...props} />;

  if (variant === "date" || variant === "time") {
    const dateVariant: DateInputVariant = variant === "date" ? "date" : "time";

    return (
      <DateTimeInput
        inputVariant={dateVariant}
        defaultStyle={DEFAULT_STYLE}
        {...props}
      />
    );
  }
  return <NativeBaseInput {...DEFAULT_STYLE} {...props} />;
};
