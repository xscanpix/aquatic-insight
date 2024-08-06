import { z } from "zod";

import { getAll, getById, update } from "./services/user.service";
import { createCallerFactory, publicProcedure, router } from "./trpc";
import { updateUserSchema } from "./db/schema/user.schema";

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

const appRouter = router({
  user: router({
    all: publicProcedure.query(async () => {
      return await getAll();
    }),
    byId: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
      return await getById(input);
    }),
    update: publicProcedure.input(updateUserSchema).mutation(async ({ ctx, input }) => {
      return await update(input);
    }),
  }),
});

type AppRouter = typeof appRouter;

const createCaller = createCallerFactory(appRouter);
type RouterInputs = inferRouterInputs<AppRouter>;
type RouterOutputs = inferRouterOutputs<AppRouter>;

export { appRouter, createCaller };
export type { AppRouter, RouterInputs, RouterOutputs };
