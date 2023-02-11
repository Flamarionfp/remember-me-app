import { NativeBaseProvider } from "native-base";

import { AppProvider } from "./src/contexts";
import theme from "./src/theme";

import Routes from "@/src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NativeBaseProvider>
  );
}
