import UserEditForm from "~/features/user/UserForm";
import { api } from "~/trpc/server";

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await api.user.byId(params);

  return <UserEditForm initialData={user}></UserEditForm>;
}
