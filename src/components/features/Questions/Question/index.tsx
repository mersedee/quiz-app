import { FC, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { QuestionType } from '@/types'
import { decodeHTMLEntities } from '@/helpers/decodeHTMLEntities'
import Option from '@/components/features/Questions/Question/Option'

interface Props {
  question: QuestionType
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

const Question: FC<Props> = ({ question, score, setScore }) => {
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [choices, setChoices] = useState<string[]>([])
  const randomIndex = Math.floor(Math.random() * 4)

  const insert = (arr: string[], index: number, newItem: string): string[] => [
    ...arr.slice(0, index), newItem, ...arr.slice(index)
  ]

  useEffect(() => {
    const data = insert(question.incorrect_answers, randomIndex, question.correct_answer)
    setChoices(data)
  }, [])

  const checkAnswer = (select: string): any => {
    setUserAnswer(select)
    if (select === question.correct_answer) {
      setScore(score + 1)
    }
  }

  return (
    <>
      <h2 className="text-lg mt-3">{decodeHTMLEntities(question.question)}</h2>

      <ul className={userAnswer.length > 0 ? 'pointer-events-none' : 'pointer-events-auto'}>
        {choices.map((choice, index) => (
          <Option
            key={index}
            choice={choice}
            currenAnswer={question.correct_answer}
            checkAnswer={checkAnswer}
          />
        ))}
      </ul>
    </>
  )
}

export default Question
