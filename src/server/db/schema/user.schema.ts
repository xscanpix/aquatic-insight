import "server-only";

import { sql } from "drizzle-orm";
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => sql`gen_random_uuid()`),
  firstName: varchar("firstName").notNull(),
  lastName: varchar("lastName").notNull(),
  email: varchar("email").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdate(() => new Date()),
});

const selectUserSchema = createSelectSchema(users);
const insertUserSchema = createInsertSchema(users).pick({
  id: true,
  firstName: true,
  lastName: true,
  email: true,
});
const updateUserSchema = selectUserSchema
  .pick({
    id: true,
    firstName: true,
    lastName: true,
    email: true,
  })
  .partial({
    firstName: true,
    lastName: true,
    email: true,
  });
const userIDSchema = selectUserSchema.pick({ id: true });

type SelectUser = z.infer<typeof selectUserSchema>;
type InsertUser = z.infer<typeof insertUserSchema>;
type UpdateUser = z.infer<typeof updateUserSchema>;

type UserID = z.infer<typeof userIDSchema>;

export default users;

export { selectUserSchema, insertUserSchema, updateUserSchema, userIDSchema };
export type { SelectUser, InsertUser, UpdateUser, UserID };
