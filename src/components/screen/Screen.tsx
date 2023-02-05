import { ImageBackground } from "react-native";
import { ScreenProps } from "react-native-screens";

import { useBackground } from "@/src/hooks";

export const Screen = (props: ScreenProps) => {
  const { getRandomBackground } = useBackground(10);

  return (
    <ImageBackground style={{ flex: 1 }} source={getRandomBackground()}>
      {props.children}
    </ImageBackground>
  );
};
