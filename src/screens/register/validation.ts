import { object } from "yup";

import {
  validateCellphoneNumber,
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
} from "@/src/helpers/validators";

export const registerFormSchema = object({
  fullName: validateFullName(),
  cellphone: validateCellphoneNumber(),
  email: validateEmail(),
  password: validatePassword(),
  confirmPassword: validateConfirmPassword(),
});
