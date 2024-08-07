"use client";

import { api, type RouterOutputs } from "~/trpc/react";

import type { ElementType } from "~/types";

type UsersOutput = RouterOutputs["user"]["all"];
type UserOutput = ElementType<UsersOutput>;

function UserItem({ user }: { user: UserOutput }) {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.createdAt.toDateString()}</p>
      <p>{user.updatedAt.toDateString()}</p>
    </div>
  );
}

export default function UserList() {
  const getUsers = api.user.all.useQuery();

  if (getUsers.status !== "success") {
    return <>Loading...</>;
  }

  const { data } = getUsers;

  return (
    <ul>
      {data.map((user, index) => {
        return (
          <li key={index}>
            <UserItem user={user} />
          </li>
        );
      })}
    </ul>
  );
}
