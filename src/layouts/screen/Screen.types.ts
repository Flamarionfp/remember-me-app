import { HeaderProps } from "@/src/types";

export interface ScreenProps extends HeaderProps {
  children: React.ReactNode;
  showHeader?: boolean;
}
