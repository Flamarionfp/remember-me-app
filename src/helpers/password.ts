export const hasLeastNCharacters = (password: string, n: number) => {
  return password.length >= 8;
};

export const hasNumber = (password: string) => {
  return password.match(/([0-9])/) && true;
};

export const hasLowerCase = (password: string) => {
  return /[a-z]/.test(password);
};

export const hasUpperCase = (password: string) => {
  return /[A-Z]/.test(password);
};

export const hasSpecialCharacters = (password: string) => {
  return password.match(/([!, @, #, $, %, &, *])/);
};
