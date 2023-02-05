import { Pressable } from "native-base";

import { RoundedButtonProps } from "./RoundedButton.types";
export const RoundedButton = (props: RoundedButtonProps) => {
  const { icon } = props;

  return (
    <Pressable
      justifyContent="center"
      alignItems="center"
      bg="primary.500"
      h="60"
      w="60"
      rounded="full"
      _pressed={{ opacity: 0.5 }}
      {...props}
    >
      {icon}
    </Pressable>
  );
};
