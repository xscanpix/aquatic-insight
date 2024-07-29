import { Optional } from "@/types/common";

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInput extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}
export interface UserOutput extends Required<UserAttributes> {}
