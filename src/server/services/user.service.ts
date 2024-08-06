import "server-only";

import UserRepository from "../db/repository/user.repository";
import type { InsertUser, UpdateUser, UserID } from "../db/schema/user.schema";

export async function update(payload: UpdateUser) {
  return await UserRepository.update(payload).then((values) => {
    if (values.length < 1) {
      throw Error("No rows updated.");
    }

    return values[0];
  });
}

export async function create(payload: InsertUser) {
  return await UserRepository.create(payload).then((values) => {
    if (values.length < 1) {
      throw Error("No rows created.");
    }

    return values[0];
  });
}

export async function getById(id: UserID) {
  return await UserRepository.getById(id).then((values) => {
    if (values.length < 0) {
      throw Error("No user found");
    }

    return values[0];
  });
}

export async function getAll() {
  return await UserRepository.getAll().then((values) => {
    return values;
  });
}
