import React, { useState } from 'react'
import { useGetCategoriesQuery } from '@/redux/services/QuizCategory'
import { SelectOption, Input } from '@/components/ui'
import { CategoryType, SelectOptionType } from '@/types'
import Button from '@/components/ui/Button'

const questionDifficultyValues = [
  { value: 'all', label: 'All' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
]

const questionTypeValues = [
  { value: 'all', label: 'All' },
  { value: 'multiple', label: 'Multiple Choice' },
  { value: 'boolean', label: 'Boolean' }
]

const Setting = (): JSX.Element => {
  const { data, isFetching } = useGetCategoriesQuery()
  const [category, setCategory] = useState<SelectOptionType | null>(null)
  const [difficulty, setDifficulty] = useState<SelectOptionType | null>(null)
  const [questionType, setQuestionType] = useState<SelectOptionType | null>(null)
  const [questionNumber, setQuestionNumber] = useState<number>(0)

  const formattedCategories = !isFetching && data.trivia_categories.map((category: CategoryType) => ({ value: category.id, label: category.name }))

  const onChangeCategory = (selectedOption: any): void => {
    setCategory(selectedOption)
  }

  const onChangeDifficulty = (selectedOption: any): void => {
    setDifficulty(selectedOption)
  }

  const onChangeQuestionType = (selectedOption: any): void => {
    setQuestionType(selectedOption)
  }

  const onChangeAmount = (e: React.FormEvent<HTMLInputElement>): void => {
    setQuestionNumber(+e.currentTarget.value)
  }

  if (isFetching) {
    return <div>loading</div>
  }

  return (
    <>
      <label className="text-md text-gray-700 block mb-1">Select Category</label>
      <SelectOption
        value={category}
        options={formattedCategories}
        onChange={onChangeCategory}
      />

      <label className="text-md text-gray-700 block mb-1 mt-5">Select Difficulty</label>
      <SelectOption value={difficulty}
        options={questionDifficultyValues}
        onChange={onChangeDifficulty}
      />

      <label className="text-md text-gray-700 block mb-1 mt-5">Select Question Type</label>
      <SelectOption value={questionType}
        options={questionTypeValues}
        onChange={onChangeQuestionType}
      />

      <label className="text-md text-gray-700 block mb-1 mt-5">Number of Question</label>
      <Input
        id="number"
        type="number"
        placeholder="1"
        min={0}
        defaultValue={questionNumber}
        onChange={onChangeAmount}
      />

      <Button intent="primary" fullWidth className="mt-6">Get Started</Button>
    </>
  )
}

export default Setting
