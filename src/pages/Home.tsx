import React, { useState } from 'react'
import { Steps, StepsProvider, useSteps } from 'react-step-builder'
import { Card } from '@/components/ui'
import { Setting } from '@/components/features'
import { useGetQuestionsQuery } from '@/redux/services/QuizCategory'
import { QuestionType } from '@/types'

const Home = (): JSX.Element => {
  const { next, prev } = useSteps()
  const [options, setOptions] = useState<string>('')
  const { data: questions, isFetching } = useGetQuestionsQuery(options)

  console.warn('questions', questions)

  if (isFetching) {
    return <div>loading</div>
  }

  const isFetched = !isFetching && questions !== null && questions.results.length > 0

  console.warn('is', isFetched)

  return (
    <div className="flex justify-center">
      <StepsProvider>
        <Card className="w-[50%]">
          <h1 className="text-center text-2xl mb-4">Quiz App</h1>
          {!isFetched
            ? <Setting setOptions={setOptions}/>
            : (
              <Steps>
                {isFetched && questions.results.map((question: QuestionType, index: number) => (
                  <div key={index}>
                    <h1>{question.question}</h1>
                  </div>
                ))}
              </Steps>)}
        </Card>
      </StepsProvider>

    </div>
  )
}

export default Home
