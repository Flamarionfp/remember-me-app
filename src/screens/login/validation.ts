import { object } from "yup";

import { UserFormValidator } from "@/src/helpers";

const { validateEmail, validatePassword } = new UserFormValidator();

export const loginFormSchema = object({
  email: validateEmail(),
  password: validatePassword(),
});
