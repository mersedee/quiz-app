import React, { useState } from 'react'
import { Card } from '@/components/ui'
import { Setting } from '@/components/features'
import { useGetQuestionsQuery } from '@/redux/services/QuizCategory'
import Questions from '@/components/features/Questions'

const Home = (): JSX.Element => {
  const [options, setOptions] = useState<string>('')
  const { data: questions, isFetching } = useGetQuestionsQuery(options)

  console.warn('questions', questions)

  if (isFetching) {
    return <div>loading</div>
  }

  const isFetched = !isFetching && questions !== null && questions.results.length > 0

  return (
    <div className="flex justify-center">
      <Card className="w-[50%]">
        {!isFetched
          ? <Setting setOptions={setOptions}/>
          : <Questions questions={questions.results} />
        }
      </Card>
    </div>
  )
}

export default Home
