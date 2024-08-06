"use client";

import { type SubmitHandler, useForm } from "react-hook-form";

import { api } from "@/app/_trpc/react";

import type { SelectUser, UpdateUser } from "@/server/db/schema/user.schema";

export default function UserEditForm({ inititalData }: { inititalData: SelectUser }) {
  const { register, handleSubmit } = useForm<UpdateUser>({
    defaultValues: inititalData,
  });

  const utils = api.useUtils();

  const createUser = api.user.update.useMutation();

  const onSubmit: SubmitHandler<UpdateUser> = async (data) => {
    createUser.mutate(data);
    await utils.user.invalidate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        ID: {inititalData.id}
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
      <div>Created: {inititalData.createdAt.toString()}</div>
      <div>Updated: {inititalData.updatedAt.toString()}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
