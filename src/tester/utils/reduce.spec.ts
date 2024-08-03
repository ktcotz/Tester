import { describe, expect, test } from "vitest";
import { reduce } from "./reduce";

describe("Reduce util function tests covering", () => {
  test("Should be correct value on all sum", () => {
    const numbers = [1, 2, 3, 4, 5];

    const reduceGlobalFn = numbers.reduce((acc, next) => (acc += next), 0);

    const reduceByOwn = reduce(numbers);

    expect(reduceByOwn).toBe(reduceGlobalFn);
  });
});
