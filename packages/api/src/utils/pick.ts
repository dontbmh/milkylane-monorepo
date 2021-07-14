const pick = <T extends any, U extends keyof T>(
  obj: T,
  keys: U[],
): Pick<T, U> => keys.reduce((a, c) => ((a[c] = obj[c]), a), Object.create({}));

export default pick;
