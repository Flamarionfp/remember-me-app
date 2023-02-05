import { Ionicons, Entypo } from "@expo/vector-icons";
import { Heading, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

export const Header = () => {
  const iconButtons = [
    {
      id: "1",
      icon: <Ionicons name="notifications-sharp" size={24} color="white" />,
      onPress: () => null,
    },
    {
      id: "2",
      icon: <Entypo name="dots-three-vertical" size={24} color="white" />,
      onPress: () => null,
    },
  ];

  return (
    <HStack justifyContent="space-between">
      <Heading color="white">Remember Me</Heading>
      <HStack space={8}>
        {iconButtons.map((button) => (
          <TouchableOpacity key={button.id} onPress={button.onPress}>
            {button.icon}
          </TouchableOpacity>
        ))}
      </HStack>
    </HStack>
  );
};
