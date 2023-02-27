import { Entypo } from "@expo/vector-icons";
import { Menu as NativeBaseMenu, Pressable } from "native-base";
import { useMemo } from "react";

import { useAuth } from "@/src/hooks";

export const Menu = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const menuOptions = useMemo(() => {
    return [
      {
        id: "1",
        label: "Sobre",
        onPress: () => null,
      },
      {
        id: "2",
        label: "Sair",
        onPress: () => handleLogout(),
      },
    ];
  }, []);

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
