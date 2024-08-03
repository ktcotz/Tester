import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Basic } from "./Basic";

describe("Basic describing test", () => {
  test("Render correct initially", () => {
    render(<Basic />);

    const title = screen.getByText(/Basic component/gi);
    const heading = screen.getByRole("heading", { name: /Nagłówek/gi });

    expect(title).toBeInTheDocument();
    expect(heading).toBeInTheDocument();

    screen.debug();
  });
});
