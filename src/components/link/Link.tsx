import { useNavigation } from "@react-navigation/native";
import { Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { LinkProps } from "./Link.types";

export const Link = (props: LinkProps) => {
  const { route = "", children } = props;
  const { navigate } = useNavigation();

  const isTextContent = React.Children.toArray(children).every(
    (child) => typeof child === "string"
  );

  console.log("isTextContent", isTextContent);

  const handleNavigate = () => {
    try {
      navigate(route as never);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      {isTextContent ? <Text color="primary.500">{children}</Text> : children}
    </TouchableOpacity>
  );
};
