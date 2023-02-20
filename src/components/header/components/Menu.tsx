import { Entypo } from "@expo/vector-icons";
import { Menu as NativeBaseMenu, Pressable } from "native-base";

const menuOptions = [
  {
    id: "1",
    label: "Sobre",
    onPress: () => null,
  },
  {
    id: "2",
    label: "Sair",
    onPress: () => null,
  },
];

export const Menu = () => {
  return (
    <NativeBaseMenu
      position="relative"
      top="6"
      w="190"
      trigger={(triggerProps) => (
        <Pressable accessibilityLabel="Menu de opções" {...triggerProps}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </Pressable>
      )}
    >
      {menuOptions.map((option) => (
        <NativeBaseMenu.Item onPress={option.onPress} key={option.id}>
          {option.label}
        </NativeBaseMenu.Item>
      ))}
    </NativeBaseMenu>
  );
};
