import type { APIRoute } from "astro";
import { cvMarkdown } from "../data/markdown";

export const GET: APIRoute = ({ site }) => {
  return new Response(cvMarkdown(site?.origin ?? ""), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
