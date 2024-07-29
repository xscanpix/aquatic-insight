"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/api-client";
import { UserOutput } from "@/contracts/user.contract";

const QUERY_KEY = ["users"];

const fetchUsers = async (): Promise<UserOutput[]> => {
  const { data } = await apiClient.get("/users");
  return data;
};

const getUsersQueryOptions = () => {
  return {
    queryKey: QUERY_KEY,
    queryFn: fetchUsers,
  };
};

export const useGetUsers = () => {
  return useQuery<UserOutput[], Error>(getUsersQueryOptions());
};

export const usersLoader = (queryClient: QueryClient) => async () => {
  const query = getUsersQueryOptions();

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};
