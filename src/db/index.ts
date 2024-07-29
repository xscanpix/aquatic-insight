import { Options, Sequelize } from "sequelize";

import * as pg from "pg";

function makeSequelize() {
  const sequelizeOptons: Options = {
    database: process.env.POSTGRES_DATABASE,
    dialect: "postgres",
    dialectModule: pg,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
  };

  if (typeof process.env.POSTGRES_URL === "undefined") {
    throw Error(`Env var 'POSTGRES_URL' is not defined.`);
  }

  return new Sequelize(process.env.POSTGRES_URL, sequelizeOptons);
}

const sequelize = makeSequelize();

export default sequelize;
