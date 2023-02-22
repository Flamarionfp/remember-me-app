import { AntDesign } from "@expo/vector-icons";
import { Box, Flex, Select } from "native-base";

import { DropdownProps } from "./Dropdown.types";

export const Dropdown = (props: DropdownProps) => {
  const { children, leftIcon = <></> } = props;

  /*   const items = useMemo(() => {
    return React.Children.toArray(children);
  }, [children]); */

  return (
    <Flex>
      <Box position="absolute" top="4" left="4">
        {leftIcon}
      </Box>
      <Select
        bg="gray.500"
        opacity="0.6"
        borderWidth={0}
        p="3"
        placeholderTextColor="white"
        selectedValue="teste"
        rounded="md"
        onValueChange={(itemValue) => null}
        pl={leftIcon ? "60" : null}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <AntDesign name="check" size={24} color="black" />,
        }}
        {...props}
      >
        {children}
      </Select>
    </Flex>
  );
};
