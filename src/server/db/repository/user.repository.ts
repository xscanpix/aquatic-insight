import "server-only";

import { eq } from "drizzle-orm";

import db from "..";
import users, { type InsertUser, type UpdateUser, type UserID } from "../schema/user.schema";

export default class UserRepository {
  static async update(payload: UpdateUser) {
    return await db.update(users).set(payload).where(eq(users.id, payload.id)).returning();
  }

  static async create(payload: InsertUser) {
    return await db.insert(users).values(payload).returning();
  }

  static async getById(id: UserID) {
    return await db.select().from(users).where(eq(users.id, id));
  }

  static async getAll() {
    return await db.select().from(users);
  }
}
