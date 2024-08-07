import UserList from "~/features/user/UserList";
import { api, HydrateClient } from "~/trpc/server";

export default async function UsersPage() {
  void api.user.all.prefetch();

  return (
    <HydrateClient>
      <UserList />
    </HydrateClient>
  );
}
