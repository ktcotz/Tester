import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://official-joke-api.appspot.com/random_joke", () => {
    return HttpResponse.json({
      type: "general",
      setup: "Best joke!",
    });
  }),
];
