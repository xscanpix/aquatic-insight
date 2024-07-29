"use client";

import Axios from "axios";

const apiClient = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
