import schema from "@/server/db/schema";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export default async function seed(db: PostgresJsDatabase<typeof schema>) {
  return await db.insert(schema.users).values([
    {
      firstName: "S",
      lastName: "N",
      email: "s.n@live.se",
    },
    {
      firstName: "N",
      lastName: "S",
      email: "n.s@live.se",
    },
    {
      firstName: "Bob",
      lastName: "Nilsson",
      email: "bob.n@live.se",
    },
    {
      firstName: "Mack",
      lastName: "Nilsson",
      email: "mack.n@live.se",
    },
  ]);
}
