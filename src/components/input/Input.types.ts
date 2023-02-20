import { IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

export interface InputProps extends IInputProps {
  label?: string;
  useTextArea?: boolean;
}
