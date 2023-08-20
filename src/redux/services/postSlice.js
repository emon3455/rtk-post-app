import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({

    getAllPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET"
      }),
    }),
    
    getPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET"
      }),
    })

  }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;

