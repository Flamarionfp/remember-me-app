import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Heading, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { Menu } from "./components/Menu";

import { APPLICATION_NAME } from "@/src/constants/app";
import { HeaderProps } from "@/src/types/header";

export const Header = (props: HeaderProps) => {
  const {
    allowBackButton = true,
    title = APPLICATION_NAME,
    isTitleVisible = true,
  } = props;

  const { canGoBack, goBack } = useNavigation();

  const showBackButton = allowBackButton && canGoBack();

  return (
    <HStack justifyContent="space-between">
      {showBackButton && (
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      )}
      {title && isTitleVisible && <Heading color="white">{title}</Heading>}

      <HStack space={8}>
        <TouchableOpacity onPress={() => null}>
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
        <Menu />
      </HStack>
    </HStack>
  );
};
