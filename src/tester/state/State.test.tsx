import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { Counter } from "./State";

describe("Counter state tests", () => {
  test("Should render initially", () => {
    render(<Counter />);
  });
});
