import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

export type DateInputVariant = "date" | "time";

type InputVariant = "default" | "password" | "textArea" | DateInputVariant;

export interface InputProps extends IInputProps {
  label?: string;
  variant?: InputVariant;
}

export interface DateTimeInputProps {
  defaultStyle: IInputProps;
  inputVariant: DateInputVariant;
}

export interface PasswordInputProps extends IInputProps {
  defaultStyle: IInputProps;
}
