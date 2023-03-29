import { FC, useState, Dispatch, SetStateAction, useMemo, FormEvent } from 'react'
import { useGetCategoriesQuery } from '@/redux/services/QuizCategory'
import { SelectOption, Input, Button } from '@/components/ui'
import { CategoryType, SelectOptionType } from '@/types'

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

const Setting: FC<Props> = ({ setOptions }) => {
  const { data: categories, isFetching } = useGetCategoriesQuery()
  const [category, setCategory] = useState<SelectOptionType>(initialState)
  const [difficulty, setDifficulty] = useState<SelectOptionType>(initialState)
  const [questionType, setQuestionType] = useState<SelectOptionType>(initialState)
  const [questionNumber, setQuestionNumber] = useState<number>(10)

  const formattedCategories = useMemo(() => {
    if (isFetching) return [initialState]
    return [initialState, ...categories.trivia_categories.map((category: CategoryType) =>
      ({
        value: category.id,
        label: category.name
      }))]
  }, [categories, isFetching])

  const onChangeCategory = (selectedOption: any): void => {
    setCategory(selectedOption)
  }

  const onChangeDifficulty = (selectedOption: any): void => {
    setDifficulty(selectedOption)
  }

  const onChangeQuestionType = (selectedOption: any): void => {
    setQuestionType(selectedOption)
  }

  const onChangeAmount = (e: FormEvent<HTMLInputElement>): void => {
    setQuestionNumber(+e.currentTarget.value)
  }

  const onQuestionRequest = (): void => {
    const requestString = `?amount=${questionNumber}&category=${category.value}&difficulty=${difficulty.value}&type=${questionType.value}`
    setOptions(requestString)
  }

  return (
    <div className="w-full">
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
    </div>
  )
}

export default Setting
