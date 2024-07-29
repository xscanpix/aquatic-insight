import { UserInput, UserOutput } from "@/contracts/user.contract";
import User from "../models/user.model";

export async function create(payload: UserInput) {
  const user = await User.create(payload);
  return user as UserOutput;
}

export async function getById(id: number) {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error("Not found");
  }

  return user as UserOutput;
}

export async function getAll() {
  const users = await User.findAll();
  return users as UserOutput[];
}
