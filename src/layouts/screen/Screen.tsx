import { ImageBackground } from "react-native";

import { ScreenProps } from "./Screen.types";

import { Header } from "@/src/components";
import { useBackground } from "@/src/hooks";

export const Screen = (props: ScreenProps) => {
  const { showHeader = true, children } = props;

  const { getRandomBackground } = useBackground(10);

  return (
    <ImageBackground
      style={{ flex: 1, paddingHorizontal: "5%", paddingVertical: 48 }}
      source={getRandomBackground()}
    >
      {showHeader && <Header />}
      {children}
    </ImageBackground>
  );
};
