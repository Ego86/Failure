import { ILoginForm } from "@/shared/interfaces/login";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getLoginApi: builder.query<ILoginForm, string>({
      query: () => "posts",
    }),
    sendLoginUser: builder.mutation<ILoginForm, string>({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body
      })
    })
  }),
});

// Экспортируем нужные части API
export const { useGetLoginApiQuery, useSendLoginUserMutation } = loginApi;