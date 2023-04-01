import { object } from "yup";

import { validateEmail, validatePassword } from "@/src/helpers/validators";

export const loginFormSchema = object({
  email: validateEmail(),
  password: validatePassword(),
});
