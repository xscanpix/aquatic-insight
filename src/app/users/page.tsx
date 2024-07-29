"use client";

import { useGetUsers } from "@/features/user/get-users";

export default function UsersPage() {
  const usersQuery = useGetUsers();

  if (usersQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!usersQuery.data) return null;

  return <p>{JSON.stringify(usersQuery.data)}</p>;
}
