import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://luzhnyak-aws.pp.ua",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["User", "Contacts"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => `users/current`,
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (body) => {
        return {
          url: "users/register",
          method: "POST",
          body,
        };
      },
      // invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User", "Contacts"],
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "users/logout",
          method: "POST",
        };
      },
      invalidatesTags: ["User", "Contacts"],
    }),
    getContacts: builder.query({
      query: () => `api/contacts`,
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (body) => {
        return {
          url: "api/contacts",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => {
        return {
          url: `api/contacts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = api;
