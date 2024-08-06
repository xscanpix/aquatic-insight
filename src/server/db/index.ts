import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import schema from "./schema";

const postgresClient = postgres(process.env.POSTGRES_URL);
const db = drizzle(postgresClient, {
  schema,
});

export default db;
