import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://smashing-flamingo-26713.upstash.io",
  token: process.env.UPSTACK_REDIS_TOKEN,
});
