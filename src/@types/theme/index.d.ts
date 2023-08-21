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
  }
}

export type RGBArrayType = [number, number, number];
