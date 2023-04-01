import { useCallback } from "react";

import { CheckPasswordStrengthResponse } from "./types";

import {
  hasLowerCase,
  hasNumber,
  hasSpecialCharacters,
  hasUpperCase,
} from "@/src/helpers";

export enum StrengthScores {
  very_strong = 4,
  strong = 3,
  moderate = 2,
  weak = 1,
}

export enum StrengthValues {
  very_strong = "muito forte",
  strong = "forte",
  moderate = "moderada",
  weak = "fraca",
}

export enum StrengthColorSchemes {
  very_strong = "success",
  strong = "success",
  moderate = "yellow",
  weak = "danger",
}

export const usePasswordStrength = () => {
  const checkPasswordStrength = useCallback(
    (password: string): CheckPasswordStrengthResponse => {
      const passwordConditions = [
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasSpecialCharacters,
      ];

      const passwordScore = passwordConditions.reduce((acc, condition) => {
        if (condition(password)) {
          return acc + 1;
        }

        return acc;
      }, 0);

      const keysStrength = Object.keys(StrengthValues);
      const strengthKey = keysStrength[passwordScore];
      /*  const strenght = StrengthValues[strengthKey]; */

      return {
        score: passwordScore,
        strength: StrengthValues.weak,
        feedbackColor: StrengthColorSchemes.weak,
      };
    },
    []
  );

  return {
    checkPasswordStrength,
  };
};
