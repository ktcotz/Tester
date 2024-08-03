import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Person } from "./Props";

describe("Props testing", () => {
  test("Render correctly", () => {
    render(<Person shouldSee={true} />);

    const namePerson = screen.getByRole("heading", { level: 2 });
    expect(namePerson).toHaveTextContent("cosiek");

    screen.debug();
  });
});
