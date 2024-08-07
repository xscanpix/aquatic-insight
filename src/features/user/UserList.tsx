"use client";

import { api, type RouterOutputs } from "~/trpc/react";

import type { ElementType } from "~/types";

type UserOutput = ElementType<RouterOutputs["user"]["all"]>;

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
  const [users] = api.user.all.useSuspenseQuery();

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <li key={index}>
            <UserItem user={user} />
          </li>
        );
      })}
    </ul>
  );
}
