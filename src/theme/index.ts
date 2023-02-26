import { extendTheme } from "native-base";

import { colors } from "./colors";
import components from "./components";

const theme = extendTheme({
  ...colors,
  components,
});

export default theme;
