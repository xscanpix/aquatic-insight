import { api } from "@/app/_trpc/server";
import UserEditForm from "@/features/user/UserForm";

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await api.user.byId(params.id);

  return <UserEditForm inititalData={user}></UserEditForm>;
}
