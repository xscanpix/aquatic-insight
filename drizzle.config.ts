import { config } from "dotenv";

import type { Config } from "drizzle-kit";

config({ path: ".env.local" });

export default {
  dialect: "postgresql",
  out: "./src/server/db/migrations",
  schema: ["./src/server/db/schema/*.ts"],
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config;
