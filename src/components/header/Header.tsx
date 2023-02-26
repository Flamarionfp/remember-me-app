import { useNavigation } from "@react-navigation/native";
import { Heading, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { Menu } from "./components/Menu";
import { BackButton } from "../back-button";

import { APPLICATION_NAME } from "@/src/constants/app";
import { HeaderProps } from "@/src/types/header";

export const Header = (props: HeaderProps) => {
  const {
    allowBackButton = true,
    title = APPLICATION_NAME,
    isTitleVisible = true,
    actionIcons = [],
  } = props;

  const { canGoBack } = useNavigation();

  const showBackButton = allowBackButton && canGoBack();

  return (
    <HStack justifyContent="space-between">
      {showBackButton && <BackButton />}
      {title && isTitleVisible && <Heading color="white">{title}</Heading>}

      <HStack space={8}>
        {actionIcons.length > 0 && (
          <>
            {actionIcons.map(({ icon, onIconPress }, index) => (
              <TouchableOpacity key={index} onPress={onIconPress}>
                {icon}
              </TouchableOpacity>
            ))}
          </>
        )}

        <Menu />
      </HStack>
    </HStack>
  );
};
