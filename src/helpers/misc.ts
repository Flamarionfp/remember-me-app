export function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatForOnlyNumbers = (text: string) => {
  return text.replace(/[^0-9]/g, "");
};

export const formatForOnlyLetters = (text: string) => {
  return text.replace(/\d/g, "");
};

export const captalize = (text: string) => {
  if (!text) return text;

  const splitText = text.split(" ");

  const capitalizedText = splitText.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedText.join(" ");
};
