import React, { useState } from 'react'
import { useGetCategoriesQuery } from '../../redux/services/QuizCategory'
import { SelectOption } from '../ui'
import { CategoryType, SelectOptionType } from '../../types'

const Setting = (): JSX.Element => {
  const { data, isFetching, error } = useGetCategoriesQuery()
  const [category, setCategory] = useState<SelectOptionType | null>(null)

  const onChangeCategory = (selectedOption: any): void => {
    setCategory(selectedOption)
  }

  const formattedCategories = !isFetching && data.trivia_categories.map((category: CategoryType) => ({ value: category.id, label: category.name }))

  console.warn(data)

  if (isFetching) {
    return <div>loading</div>
  }

  return (
    <div>
      <SelectOption value={category} options={formattedCategories} onChange={onChangeCategory} />
    </div>
  )
}

export default Setting
