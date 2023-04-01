export const formatCellphone = (text: string) => {
  const valueWithoutFormat = `${text}`.replace(/\D/g, "");
  const match = valueWithoutFormat.match(/^(\d{2})(\d{4,5})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return valueWithoutFormat;
};
