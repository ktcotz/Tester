import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SummaryForm } from "./SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Summary Form tests", () => {
  test("Should initially render correct", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(confirmButton).toBeDisabled();
  });

  test("Checkbox enables button on first click and disables on second click", async () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(confirmButton).toBeDisabled();

    await userEvent.click(checkbox);

    expect(confirmButton).toBeEnabled();

    await userEvent.click(checkbox);

    expect(confirmButton).toBeDisabled();
  });

  test("Popover responds to hover", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);

    await user.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    
    expect(popover).not.toBeInTheDocument();
  });
});
