import "server-only";

import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import schema, { type Schema } from "../schema";

interface IDatabase<Schema extends Record<string, unknown>> extends PostgresJsDatabase<Schema> {}

class DatabaseWrapper {
  constructor(readonly schema: Schema, readonly db: IDatabase<Schema>) {}
}

let databaseWrapper: DatabaseWrapper | undefined = undefined;

function makeDatabaseWrapper() {
  if (databaseWrapper) {
    return databaseWrapper;
  }

  const postgresClient = postgres(process.env.POSTGRES_URL);
  const db = drizzle(postgresClient, {
    schema,
  });

  databaseWrapper = new DatabaseWrapper(schema, db);
  return databaseWrapper;
}

export type { DatabaseWrapper };

export const dbWrapper = makeDatabaseWrapper();
