import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState, useEffect, useContext } from "react";
import { ImageBackground } from "react-native";

import { ScreenProps } from "./Screen.types";

import { Header } from "@/src/components";
import { AppContext } from "@/src/contexts";

SplashScreen.preventAutoHideAsync();
export const Screen = (props: ScreenProps) => {
  const { background } = useContext(AppContext);
  const { showHeader = true, children } = props;
  const [screenIsReady, setScreenIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      const readyConditions: boolean[] = [!!background];

      setScreenIsReady(readyConditions.every(Boolean));
    }

    prepare();
  }, [background]);

  const onLayoutRootView = useCallback(async () => {
    if (screenIsReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 500);
    }
  }, [screenIsReady]);

  return (
    <ImageBackground
      onLayout={onLayoutRootView}
      style={{ flex: 1, paddingHorizontal: "5%", paddingVertical: 48 }}
      source={background}
    >
      {showHeader && <Header />}
      <StatusBar style="light" translucent={false} />
      {children}
    </ImageBackground>
  );
};
