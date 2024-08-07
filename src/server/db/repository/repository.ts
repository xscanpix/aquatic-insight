import "server-only";

import { dbWrapper } from "./db";

import type { DatabaseWrapper } from "./db";

abstract class Repository {
  private _dbWrapper: DatabaseWrapper = dbWrapper;

  public get db() {
    return this._dbWrapper.db;
  }

  public get schema() {
    return this._dbWrapper.schema;
  }
}

export default Repository;
