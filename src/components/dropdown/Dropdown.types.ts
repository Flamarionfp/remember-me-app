import { ISelectProps } from "native-base/lib/typescript/components/primitives/Select";

export interface DropdownProps extends ISelectProps {
  placeholder?: string;
  selectedIndex?: number;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}
