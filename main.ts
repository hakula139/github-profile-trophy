import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
// Bare specifiers resolve via deno.json, which vercel-deno does not deploy.
// Keep it off api/index.ts so the serverless entrypoint stays self-contained.
import "@std/dotenv/load";
import requestHandler from "./api/index.ts";

serve(requestHandler, { port: Number(Deno.env.get("PORT")) || 8080 });
