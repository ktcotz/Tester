export const reduce = (numbers: number[]) => {
  return numbers.reduce((acc, next) => (acc += next), 0);
};
