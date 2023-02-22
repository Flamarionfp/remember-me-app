import { Box } from "native-base";

type IconWrapperProps = {
  children: React.ReactNode;
};

export const IconWrapper = (props: IconWrapperProps) => (
  <Box px="3">{props.children}</Box>
);
