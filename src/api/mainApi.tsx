import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getCookie } from '../utils/cookie';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://flowwow-backend.pav.studio`,
    prepareHeaders: (headers) => {
      const uuid = sessionStorage.getItem('uuid');
      if (uuid) {
        headers.set('uuid', uuid);
      }
      return headers;
    },
  }),
  tagTypes: ['mainControl'],

  endpoints: (build) => ({
    selectSeed: build.mutation({
      query: (body) => ({
        url: 'api.php?page=select_seed',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['mainControl'],
    }),
    setFlowerName: build.mutation({
      query: (body) => ({
        url: 'api.php?page=set_flower_name',
        method: 'POST',
        body,
      }),
    }),


    setEmail: build.mutation({
      query: (body) => ({
        url: 'api.php?page=set_email',
        method: 'POST',
        body,
      }),
     invalidatesTags: ['mainControl'],
    }),



    doTask: build.mutation({
      query: (body) => ({
        url: 'api.php?page=do_task',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['mainControl'],
    }),

    register: build.mutation({
      query: (body) => ({
        url: 'api.php?page=reg',
        method: 'POST',
        body,
      }),
    }),

    getUserInfo: build.query({
      query: () => ({
        url: 'api.php?page=user_info',
      }),
      providesTags: ['mainControl'],
    }),

    getTasks: build.query({
      query: () => ({
        url: 'api.php?page=tasks',
      }),
      providesTags: ['mainControl'],
    }),

    // updatePassword: build.mutation({
    //   query: (body) => ({
    //     url: '/update-password',
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['authControl'],

    // }),

    // updateEmail: build.mutation({
    //   query: (body) => ({
    //     url: '/update-email',
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['authControl'],

    // }),
  }),
});

export const {
  useDoTaskMutation,
  useSelectSeedMutation,
  useSetFlowerNameMutation,
  useGetTasksQuery,
  useRegisterMutation,
  useGetUserInfoQuery,
  useSetEmailMutation
} = mainApi;
