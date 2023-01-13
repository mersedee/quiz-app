import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/'
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({ query: () => 'api_category.php' }),
    getQuestions: builder.query<any, string>({ query: (feat) => `api.php${feat}` })
  })
})

export const { useGetCategoriesQuery, useGetQuestionsQuery } = categoryApi
