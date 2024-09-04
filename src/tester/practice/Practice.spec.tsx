import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Practice } from "./Practice";
import userEvent from "@testing-library/user-event";

describe.only("Practice testing", () => {
  test("Button stars with correct color and label", () => {
    render(<Practice />);

    const buttonElement = screen.getByRole("button", { name: /blue/i });

    expect(buttonElement).toHaveClass("red");
  });

  test("Button has correct label and color after click", async () => {
    render(<Practice />);

    const buttonElement = screen.getByRole("button", { name: /blue/i });

    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/red/gi);
    expect(buttonElement).toHaveClass("blue");
  });

  test("Checkbox flow", async () => {
    render(<Practice />);

    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("gray");
  });
});
