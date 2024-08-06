import { cache } from "react";
import { createHydrationHelpers } from "@trpc/react-query/rsc";

import { createQueryClient } from "./query-client";
import { createCaller, type AppRouter } from "@/server";

const getQueryClient = cache(createQueryClient);
const caller = createCaller({});

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(caller, getQueryClient);
