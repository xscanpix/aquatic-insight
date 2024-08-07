import "server-only";

import UserRepository from "~/server/db/repository/user.repository";

import type {
  InsertUser,
  UpdateUser,
  UserID,
} from "~/server/db/schema/user.schema";

class UserService {
  readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async update(payload: UpdateUser) {
    return await this.repository.update(payload).then((values) => {
      if (values.length < 1) {
        throw Error("No rows updated.");
      }

      return values[0];
    });
  }

  async create(payload: InsertUser) {
    return await this.repository.create(payload).then((values) => {
      if (values.length < 1) {
        throw Error("No rows created.");
      }

      return values[0];
    });
  }

  async getById(id: UserID) {
    return await this.repository.getById(id).then((values) => {
      if (values.length < 0) {
        throw Error("No user found");
      }

      return values[0];
    });
  }

  async getAll() {
    return await this.repository.getAll().then((values) => {
      return values;
    });
  }
}

export default UserService;
