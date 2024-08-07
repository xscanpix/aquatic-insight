"use client";

import { type SubmitHandler, useForm } from "react-hook-form";

import { api, type RouterInputs, type RouterOutputs } from "~/trpc/react";

import type { ElementType } from "~/types";

type UserOutput = ElementType<RouterOutputs["user"]["all"]>;
type UserInput = RouterInputs["user"]["update"];

export default function UserEditForm({
  initialData,
}: {
  initialData: UserOutput;
}) {
  const [user] = api.user.byId.useSuspenseQuery(
    { id: initialData.id },
    {
      initialData,
    },
  );

  const { register, handleSubmit } = useForm<UserInput>({
    defaultValues: user,
  });

  const utils = api.useUtils();

  const createUser = api.user.update.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
    },
  });

  const onSubmit: SubmitHandler<UserInput> = async (data) => {
    createUser.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        ID: {user.id}
        <input type="hidden" {...register("id")} />
      </div>
      <div>
        <label>
          First name:
          <input {...register("firstName")} />
        </label>
      </div>
      <div>
        <label>
          Last name:
          <input {...register("lastName")} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input {...register("email")} />
        </label>
      </div>
      <div>Created: {user.createdAt.toString()}</div>
      <div>Updated: {user.updatedAt.toString()}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
