import { updateUserSchema, userIDSchema } from "~/server/db/schema/user.schema";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.services.user.getAll();
  }),
  byId: publicProcedure.input(userIDSchema).query(async ({ ctx, input }) => {
    return await ctx.services.user.getById(input);
  }),
  update: publicProcedure
    .input(updateUserSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.services.user.update(input);
    }),
});
