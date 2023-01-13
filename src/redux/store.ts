import { configureStore } from '@reduxjs/toolkit'
import { categoryApi } from './services/QuizCategory'

const reducer = {
  [categoryApi.reducerPath]: categoryApi.reducer
}

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware)
})
