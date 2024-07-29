import * as userDal from "../dal/user.dal";

import { UserInput } from "@/contracts/user.contract";

export function create(payload: UserInput) {
  return userDal.create(payload);
}

export function getById(id: number) {
  return userDal.getById(id);
}

export function getAll() {
  return userDal.getAll();
}
