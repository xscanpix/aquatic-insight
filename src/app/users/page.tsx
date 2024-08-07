import UserList from "~/features/user/UserList";
import { api, HydrateClient } from "~/trpc/server";

export const dynamic = "auto";

export default async function UsersPage() {
  await api.user.all.prefetch();

  return (
    <HydrateClient>
      <UserList />
    </HydrateClient>
  );
}
