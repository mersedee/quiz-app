import React, { useState } from 'react'
import { Steps, useSteps } from 'react-step-builder'
import Index from '@/components/features/Questions/Question'
import { QuestionType } from '@/types'
import Button from '@/components/ui/Button'
import { useGetQuestionsQuery } from '@/redux/services/QuizCategory'
import { Loading } from '@/components/ui'

interface Props {
  options: string
  setOptions: any
}

const Questions = ({ options, setOptions }: Props): JSX.Element => {
  const { data: questions, isFetching, refetch } = useGetQuestionsQuery(options)
  const { next, current, total } = useSteps()
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(1)

  console.warn(questions)

  const onNext = (): void => {
    setCount(count + 1)
    next()
  }

  const playAgain = async (): Promise<void> => {
    setScore(0)
    setCount(1)
    setOptions('')
    await refetch()
  }

  return (
    <>
      {isFetching
        ? <Loading />
        : <div className="w-full">

          {count === questions.results.length
            ? (
              <div className="mt-4 text-center">
                <div className="text-3xl">
                Your Score : <span className="font-medium">{score} / {total}</span>
                </div>
                <Button intent="primary" className="mx-auto mt-5" onClick={playAgain}>Play Again</Button>
              </div>)
            : (
              <>
                <div className="flex justify-between">
                  <div>Score: {score}</div>
                  <div>{current} of {total} Question</div>
                </div>
                <hr className="mt-4"/>
                <Steps>
                  { questions.results.length > 0 &&
                   questions.results.map((question: QuestionType, index: number) => (
                     <Index key={index} question={question} setScore={setScore} score={score} />
                   ))}
                </Steps>
                <div className="flex justify-end mt-6">
                  <Button intent="primary" onClick={onNext}>Next</Button>
                </div>
              </>)}
        </div>
      }
    </>
  )
}

export default Questions
