import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Counter } from "./State";
import { userEvent } from "@testing-library/user-event";

describe("Counter state tests", () => {
  test("Should render initially", () => {
    render(<Counter />);

    const addButton = screen.getByRole("button", { name: "Dodaj" });
    const subtractButton = screen.getByRole("button", { name: "Odejmij" });
    const countElement = screen.getByRole("heading", { name: /Count/gi });

    expect(addButton).toBeInTheDocument();
    expect(subtractButton).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test("Should add to count", async () => {
    render(<Counter />);
    const addButton = screen.getByRole("button", { name: "Dodaj" });
    const countElement = screen.getByRole("heading", { name: /Count/gi });

    expect(countElement).toHaveTextContent("Count : 0");

    await userEvent.click(addButton);

    expect(countElement).toHaveTextContent("Count : 1");
  });

  test("Should remove count with disabled when 0", async () => {
    render(<Counter />);
    const subtractButton = screen.getByRole("button", { name: "Odejmij" });
    const countElement = screen.getByRole("heading", { name: /Count/gi });
    const addButton = screen.getByRole("button", { name: "Dodaj" });

    expect(countElement).toHaveTextContent("Count : 0");

    await userEvent.click(subtractButton);

    expect(countElement).toHaveTextContent("Count : 0");

    await userEvent.click(addButton);
    await userEvent.click(addButton);

    expect(countElement).toHaveTextContent("Count : 2");

    await userEvent.click(subtractButton);

    expect(countElement).toHaveTextContent("Count : 1");
  });
});
