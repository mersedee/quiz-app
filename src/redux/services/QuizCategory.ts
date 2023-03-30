import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/'
  }),
  tagTypes: ['Category', 'Question'],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => 'api_category.php',
      providesTags: ['Category']
    }),
    getQuestions: builder.query<any, string>({
      query: (feat) => `api.php${feat}`,
      providesTags: ['Question']
    })
  })
})

export const { useGetCategoriesQuery, useGetQuestionsQuery } = categoryApi
