import { string } from "yup";

import {
  INVALID_FIED_DEFAULT_MESSAGE,
  REQUIRED_DEFAULT_MESSAGE,
} from "@/src/constants";

export const validateEmail = () => {
  return string()
    .email(INVALID_FIED_DEFAULT_MESSAGE)
    .required(REQUIRED_DEFAULT_MESSAGE);
};
