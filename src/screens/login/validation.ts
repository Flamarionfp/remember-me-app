import { object, string } from "yup";

export const loginFormSchema = object({
  email: string().email().required(),
  password: string().required(),
});
