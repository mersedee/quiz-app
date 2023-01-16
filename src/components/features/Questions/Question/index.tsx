import React, { Dispatch, SetStateAction } from 'react'
import { QuestionType } from '@/types'
import { decodeHTMLEntities } from '@/helpers/decodeHTMLEntities'
import Option from '@/components/features/Questions/Question/Option'

interface Props {
  question: QuestionType
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

const Index = ({ question, score, setScore }: Props): JSX.Element => {
  const randomIndex = Math.floor(Math.random() * 4)
  const insert = (arr: string[], index: number, newItem: string): string[] => [
    ...arr.slice(0, index), newItem, ...arr.slice(index)
  ]
  const choices = insert(question.incorrect_answers, randomIndex, question.correct_answer)

  const checkAnswer = (select: string): any => {
    if (select === question.correct_answer) {
      setScore(score + 1)
    }
  }

  return (
    <div>
      <h2 className="text-lg mt-3">{decodeHTMLEntities(question.question)}</h2>

      <ul>
        {choices.map((choice, index) => (
          <Option
            key={index}
            choice={choice}
            currenAnswer={question.correct_answer}
            checkAnswer={checkAnswer}
          />
        ))}
      </ul>
    </div>
  )
}

export default Index
