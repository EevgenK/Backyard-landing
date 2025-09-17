export const makeId = (str: string): string =>
  str.toLowerCase().replace(/\s+/g, '-');
