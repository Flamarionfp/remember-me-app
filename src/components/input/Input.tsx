import { Input as NativeBaseInput, TextArea } from "native-base";
import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import React from "react";

import { InputProps } from "./Input.types";

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
  const { useTextArea = false } = props;

  return (
    <>
      {useTextArea ? (
        <TextArea autoCompleteType="off" {...DEFAULT_STYLE} {...props} />
      ) : (
        <NativeBaseInput {...DEFAULT_STYLE} {...props} />
      )}
    </>
  );
};
