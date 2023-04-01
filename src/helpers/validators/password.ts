import { string, ref } from "yup";

import {
  hasLowerCase,
  hasUpperCase,
  hasNumber,
  hasSpecialCharacters,
} from "../password";

import {
  INVALID_FIED_DEFAULT_MESSAGE,
  REQUIRED_DEFAULT_MESSAGE,
} from "@/src/constants";

export const validatePassword = (passwordMinLength = 8) => {
  return string()
    .min(
      passwordMinLength,
      `A senha deve ter no mínimo ${passwordMinLength} caracteres`
    )
    .required(REQUIRED_DEFAULT_MESSAGE)
    .test("isValidPassword", INVALID_FIED_DEFAULT_MESSAGE, (password) => {
      const passwordConditions = [
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasSpecialCharacters,
      ];

      if (!password) return false;

      return passwordConditions.every((isValidCondition) => {
        return isValidCondition(password);
      });
    });
};

export const validateConfirmPassword = () => {
  return validatePassword().oneOf([ref("password")], "As senhas não coincidem");
};
