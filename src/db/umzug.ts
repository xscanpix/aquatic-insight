import * as fs from "fs";
import path from "path";

import { SequelizeStorage, Umzug } from "umzug";

import sequelize from ".";

function makeUmzug() {
  const migrationsPath = path.join(__dirname, "migrations");
  const templatesPath = path.join(__dirname, "templates");

  return new Umzug({
    migrations: {
      glob: `${migrationsPath}/*.ts`,
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
    create: {
      folder: migrationsPath,
      template: (filepath) => [[filepath, fs.readFileSync(`${templatesPath}/migration-template.ts`).toString()]],
    },
  });
}

export const migrator = makeUmzug();

export type Migration = typeof migrator._types.migration;
