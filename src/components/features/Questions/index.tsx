import React from 'react'
import { Steps, useSteps } from 'react-step-builder'
import Question from '@/components/features/Questions/Question'
import { QuestionType } from '@/types'
import Button from '@/components/ui/Button'

interface Props {
  questions: QuestionType[]
}

const Questions = ({ questions }: Props): JSX.Element => {
  const { next, prev, current, total } = useSteps()
  return (
    <>
      <div className="flex justify-between">
        <div>{current} of {total} Question</div>
      </div>

      <hr className="mt-4"/>

      <Steps>
        {questions.map((question: QuestionType, index: number) => (
          <Question key={index} question={question} />
        ))}
      </Steps>

      <div className="flex justify-between mt-6">
        <Button intent="primary" onClick={prev}>Previous</Button>
        <Button intent="primary" onClick={next}>Next</Button>
      </div>

    </>
  )
}

export default Questions
