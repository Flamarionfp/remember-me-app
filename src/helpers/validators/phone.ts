import { string } from "yup";

import {
  INVALID_FIED_DEFAULT_MESSAGE,
  REQUIRED_DEFAULT_MESSAGE,
} from "@/src/constants";

export const validateCellphoneNumber = () => {
  return string()
    .required(REQUIRED_DEFAULT_MESSAGE)
    .min(15, INVALID_FIED_DEFAULT_MESSAGE)
    .max(15, INVALID_FIED_DEFAULT_MESSAGE);
};
