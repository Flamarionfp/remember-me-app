import { IPressableProps } from "native-base";

export interface RoundedButtonProps extends IPressableProps {
  icon: React.ReactNode;
  onPress: () => void;
}
