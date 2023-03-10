import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

export type DateInputVariant = "date" | "time";

type InputVariant =
  | "default"
  | "email"
  | "password"
  | "textArea"
  | DateInputVariant;

export interface InputProps extends IInputProps {
  label?: string;
  variant?: InputVariant;
  error?: string;
  leftIcon?: JSX.Element;
  touched?: boolean;
}

export interface DateTimeInputProps {
  inputVariant: DateInputVariant;
}

export interface EmailInputProps extends IInputProps {}
export interface PasswordInputProps extends IInputProps {}
