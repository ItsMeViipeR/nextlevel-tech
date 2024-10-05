"use server";

import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

export const incrementViews = async (
  slug: string
): Promise<{ views: number }> => {
  const cookieList = cookies();
  const KEY = `postview:${slug}`;
  const currentPostCookieDate = cookieList.get(KEY)?.value;

  if (currentPostCookieDate) {
    return {
      views: Number(await redis.get(KEY)),
    };
  }

  const newViewCount = await redis.incr(KEY);

  cookieList.set(KEY, new Date().toISOString(), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  });

  return { views: Number(newViewCount) };
};
