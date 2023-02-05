import { extendTheme } from "native-base";

import { colors } from "./colors";

const theme = extendTheme({
  ...colors,
});

export default theme;
