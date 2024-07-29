import { DataTypes } from "sequelize";
import type { Migration } from "../umzug";

export const up: Migration = async ({ context }) => {
  await context.sequelize.query(`raise fail('up migration not implemented')`);
};

export const down: Migration = async ({ context }) => {
  await context.sequelize.query(`raise fail('down migration not implemented')`);
};
