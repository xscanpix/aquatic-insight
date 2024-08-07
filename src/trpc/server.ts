import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers as getHeaders } from "next/headers";
import { cache } from "react";

import { createCaller, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { createQueryClient } from "./query-client";

const createContext = cache(() => {
  const headers = new Headers(getHeaders());
  headers.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(caller, getQueryClient);
