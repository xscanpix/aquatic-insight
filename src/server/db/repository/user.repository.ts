import "server-only";

import { eq } from "drizzle-orm";

import Repository from "./repository";

import type { InsertUser, UpdateUser, UserID } from "../schema/user.schema";

class UserRepository extends Repository {
  readonly users = this.schema.users;

  async update(payload: UpdateUser) {
    return await this.db.update(this.users).set(payload).where(eq(this.users.id, payload.id)).returning();
  }

  async create(payload: InsertUser) {
    return await this.db.insert(this.users).values(payload).returning();
  }

  async getById(payload: UserID) {
    return await this.db.select().from(this.users).where(eq(this.users.id, payload.id));
  }

  async getAll() {
    return await this.db.select().from(this.users);
  }
}

export default UserRepository;
