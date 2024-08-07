import UserEditForm from "~/features/user/UserForm";
import { api } from "~/trpc/server";

export const dynamic = "auto";

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await api.user.byId(params);

  if (!user) {
    return null;
  }

  return <UserEditForm initialData={user}></UserEditForm>;
}
