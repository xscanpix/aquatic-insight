import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import schema from "../src/server/db/schema";

import { default as seedUsers } from "@/server/db/seeders/user.seeder";

const postgresClient = postgres(process.env.POSTGRES_URL!, {
  connect_timeout: 0,
});

const db = drizzle(postgresClient, {
  schema,
});

Promise.all([await seedUsers(db)]);
