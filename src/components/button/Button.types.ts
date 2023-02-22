import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";

export interface ButtonProps extends InterfaceBoxProps {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}
