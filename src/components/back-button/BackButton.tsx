import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export const BackButton = () => {
  const { canGoBack, goBack } = useNavigation();

  if (canGoBack()) {
    return (
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
    );
  }

  return <></>;
};
