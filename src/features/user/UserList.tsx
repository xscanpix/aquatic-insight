"use client";

import { api } from "@/app/_trpc/react";

import type { SelectUser } from "@/server/db/schema/user.schema";

function UserItem({ user }: { user: SelectUser }) {
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
  const users = api.user.all.useQuery();

  if (!users.data) {
    return null;
  }

  return (
    <ul>
      {users.data.map((user, index) => {
        return (
          <li key={index}>
            <UserItem user={user} />
          </li>
        );
      })}
    </ul>
  );
}
