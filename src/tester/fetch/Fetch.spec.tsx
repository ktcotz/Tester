import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Fetch } from "./Fetch";
import { server } from "../../mocks/node";
import { http, HttpResponse } from "msw";

describe("Fetch testing", () => {
  test("Should see a loader initially", () => {
    render(<Fetch />);

    const loader = screen.getByText(/Loading.../gi);

    expect(loader).toBeInTheDocument();
  });

  test("Should see correct values on success", async () => {
    render(<Fetch />);

    const loader = screen.getByText(/Loading.../gi);

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader).then(() => {
      const type = screen.getByRole("heading", { level: 1 });
      const joke = screen.getByRole("heading", { level: 2 });

      expect(type).toHaveTextContent("general");
      expect(joke).toHaveTextContent("Best joke!");
    });
  });

  test("Should see error on error", async () => {
    server.use(
      http.get("https://official-joke-api.appspot.com/random_joke", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<Fetch />);

    const loader = screen.getByText(/Loading.../gi);

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader).then(() => {
      const error = screen.getByText(/Error/gi);

      expect(error).toBeInTheDocument();
    });
  });
});
