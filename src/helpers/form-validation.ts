import { string } from "yup";

import {
  hasLowerCase,
  hasUpperCase,
  hasNumber,
  hasSpecialCharacters,
} from "./password";

const INVALID_DEFAULT_MESSAGE = "Campo inválido";
const REQUIRED_DEFAULT_MESSAGE = "Campo obrigatório";

export class UserFormValidator {
  validateEmail() {
    return string()
      .email(INVALID_DEFAULT_MESSAGE)
      .required(REQUIRED_DEFAULT_MESSAGE);
  }

  validatePassword(passwordMinLength = 8) {
    return string()
      .min(
        passwordMinLength,
        `A senha deve ter no mínimo ${passwordMinLength} caracteres`
      )
      .required(REQUIRED_DEFAULT_MESSAGE)
      .test("passwordValidation", INVALID_DEFAULT_MESSAGE, (password) => {
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
  }
}
