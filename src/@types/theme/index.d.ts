import "@rneui/themed";

const getKeyArray = (key: string, start: number, end: number): string[] =>
  new Array(end - start + 1)
    .fill(key)
    .map((_, index) => `${key}${(index + start) * 100}`);

// const primaryTypeSet: {
//   [key: string]: string;
// } = getKeyArray("primary", 1, 9).reduce((prev, curr)=> ({...prev, {[curr]: string}}),{});

declare module "@rneui/themed" {
  export interface Colors {
    textPrimary: string;
    textSecondary: string;
    paper: string;
    helperText?: string;
    grey6: string;
    grey7: string;
    grey8: string;
  }
  export interface GreyType {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

export type RGBArrayType = [number, number, number];
