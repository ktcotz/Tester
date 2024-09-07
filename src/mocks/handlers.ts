import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://official-joke-api.appspot.com/random_joke", () => {
    return HttpResponse.json({
      type: "general",
      setup: "Best joke!",
    });
  }),

  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),
];
