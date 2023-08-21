import { RGBArrayType } from "@src/@types/theme";

// Function to convert hex code string to decimal number
export const hexToDecimal = (hexString: string): number => {
  const extracted: string | undefined = hexString
    ?.toLowerCase?.()
    .match?.(/([\d+abcdef])*/g)?.[0];

  return parseInt(extracted || "", 16);
};

// Function to convert decimal number to hex code string
export const decimalToHex = (decimalNumber: number): string => {
  return decimalNumber.toString(16);
};

// function to convert a 6 lettered hex string to an array
export const hexToArray = (hexString: string): RGBArrayType => {
  const extracted: string[] | null = hexString
    ?.toLowerCase?.()
    .match?.(/([\d+abcdef]){2}/g);

  if (extracted !== null) {
    return [
      hexToDecimal(extracted[0]),
      hexToDecimal(extracted[1]),
      hexToDecimal(extracted[2]),
    ];
  } else {
    return [0, 0, 0];
  }
};

// function to convert an array of numbers to a color hex code
export const arrayToHex = (arrayList: RGBArrayType): string => {
  return arrayList
    .map((array) => decimalToHex(array))
    .reduce((prev, curr) => prev + curr, "#");
};

// function to convert a 6 lettered color hex string to rgb
export const hexToRGBString = (hexString: string): string => {
  const array = hexToArray(hexString);
  return `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
};
