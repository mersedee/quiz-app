import React, { useState, Dispatch, SetStateAction } from 'react'
import { useGetCategoriesQuery } from '@/redux/services/QuizCategory'
import { SelectOption, Input } from '@/components/ui'
import { CategoryType, SelectOptionType } from '@/types'
import Button from '@/components/ui/Button'

const questionDifficultyValues = [
  { value: '', label: 'All' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
]

const questionTypeValues = [
  { value: '', label: 'All' },
  { value: 'multiple', label: 'Multiple Choice' },
  { value: 'boolean', label: 'Boolean' }
]

const initialState = { value: '', label: 'All' }

interface Props {
  setOptions: Dispatch<SetStateAction<string>>
}

const Setting = ({ setOptions }: Props): JSX.Element => {
  const { data: categories, isFetching } = useGetCategoriesQuery()
  const [category, setCategory] = useState<SelectOptionType>(initialState)
  const [difficulty, setDifficulty] = useState<SelectOptionType>(initialState)
  const [questionType, setQuestionType] = useState<SelectOptionType>(initialState)
  const [questionNumber, setQuestionNumber] = useState<number>(10)

  const formattedCategories: SelectOptionType[] = !isFetching && (categories.trivia_categories.map((category: CategoryType) =>
    ({
      value: category.id,
      label: category.name
    })))

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

  const onQuestionRequest = (): void => {
    const requestString = `?amount=${questionNumber}&category=${category.value}&difficulty=${difficulty.value}&type=${questionType.value}`
    setOptions(requestString)
  }

  return (
    <>
      <h1 className="text-center text-2xl mb-4">Quiz App</h1>

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

      <Button
        intent="primary"
        fullWidth className="mt-6"
        onClick={onQuestionRequest}
      >
          Get Started
      </Button>
    </>
  )
}

export default Setting
