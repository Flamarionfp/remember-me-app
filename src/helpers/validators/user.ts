import { string } from "yup";

import {
  INVALID_FIED_DEFAULT_MESSAGE,
  REQUIRED_DEFAULT_MESSAGE,
} from "@/src/constants";

export const validateFullName = () => {
  return string()
    .required(REQUIRED_DEFAULT_MESSAGE)
    .min(3, INVALID_FIED_DEFAULT_MESSAGE)
    .max(50, INVALID_FIED_DEFAULT_MESSAGE)
    .test("isValidFullName", INVALID_FIED_DEFAULT_MESSAGE, (value) => {
      if (!value) return false;

      const splitedName = value.split(" ");

      if (splitedName.length < 2) return false;

      const regex = /^[a-zA-Z ]+$/;

      return regex.test(value);
    });
};
