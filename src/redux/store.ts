import { configureStore } from '@reduxjs/toolkit'
import { categoryApi } from './services/QuizCategory'

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware)
})
