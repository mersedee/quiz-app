import React, { useState } from 'react'
import { Steps, useSteps } from 'react-step-builder'
import Index from '@/components/features/Questions/Question'
import { QuestionType } from '@/types'
import Button from '@/components/ui/Button'

interface Props {
  questions: QuestionType[]
}

const Questions = ({ questions }: Props): JSX.Element => {
  const { next, current, total } = useSteps()
  const [score, setScore] = useState(0)

  return (
    <div className="w-full">

      {current === total
        ? (
          <div className="mt-4 text-center">
            <div className="text-3xl">
                Your Score : <span className="font-medium">{score} / {total}</span>
            </div>
            <Button intent="primary" className="mx-auto mt-5">Play Again</Button>
          </div>)
        : (
          <>
            <div className="flex justify-between">
              <div>Score: {score}</div>
              <div>{current} of {total} Question</div>
            </div>
            <hr className="mt-4"/>
            <Steps>
              {questions.map((question: QuestionType, index: number) => (
                <Index key={index} question={question} setScore={setScore} score={score} />
              ))}
            </Steps>
            <div className="flex justify-end mt-6">
              <Button intent="primary" onClick={next}>Next</Button>
            </div>
          </>)}
    </div>
  )
}

export default Questions
