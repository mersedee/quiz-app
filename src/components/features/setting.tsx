import React from 'react'
import { useGetCategoriesQuery } from '../../redux/services/QuizCategory'

const Setting = (): JSX.Element => {
  const { data, isFetching, error } = useGetCategoriesQuery()

  console.warn(data)
  return (
    <div>
       hiii
    </div>
  )
}

export default Setting
