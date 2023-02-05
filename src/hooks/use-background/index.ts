import { useCallback, useMemo } from "react";

import { randomInt } from "@/src/helpers";

export const useBackground = (totalBackgrounds: number) => {
  const backgrounds = useMemo(() => {
    return [
      require("../../../assets/backgrounds/background-1.jpg"),
      require("../../../assets/backgrounds/background-2.jpg"),
      require("../../../assets/backgrounds/background-3.jpg"),
      require("../../../assets/backgrounds/background-4.jpg"),
      require("../../../assets/backgrounds/background-5.jpg"),
      require("../../../assets/backgrounds/background-6.jpg"),
      require("../../../assets/backgrounds/background-7.jpg"),
      require("../../../assets/backgrounds/background-8.jpg"),
      require("../../../assets/backgrounds/background-9.jpg"),
      require("../../../assets/backgrounds/background-10.jpg"),
    ];
  }, []);

  const getRandomBackground = useCallback(() => {
    const randomizedBackgroundIndex = randomInt(0, totalBackgrounds - 1);

    return backgrounds[randomizedBackgroundIndex];
  }, [backgrounds, totalBackgrounds]);

  return { getRandomBackground };
};
