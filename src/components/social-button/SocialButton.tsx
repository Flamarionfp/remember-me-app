import { FontAwesome } from "@expo/vector-icons";

import { SocialButtonProps } from "./SocialButton.types";
import GogleIcon from "../../../assets/icons/google-icon.svg";
import { RoundedButton } from "../rounded-button";

export const SocialButton = (props: SocialButtonProps) => {
  const { socialService, onPress = () => null } = props;

  const getPropsBySocialService = () => {
    const icons = {
      facebook: {
        icon: <FontAwesome name="facebook-f" size={24} color="white" />,
        backgroundColor: "#3b5998",
      },
      google: {
        icon: <GogleIcon />,
        backgroundColor: "#fff",
      },
    };

    return icons[socialService];
  };

  const { backgroundColor, icon } = getPropsBySocialService();

  return (
    <RoundedButton onPress={onPress} bg={backgroundColor} icon={icon} p="4" />
  );
};
