import React from 'react'
import { QuestionType } from '@/types'
import { decodeHTMLEntities } from '@/helpers/decodeHTMLEntities'

interface Props {
  question: QuestionType
}

const Question = ({ question }: Props): JSX.Element => {
  const randomIndex = Math.floor(Math.random() * 4)
  const insert = (arr: string[], index: number, newItem: string): string[] => [
    ...arr.slice(0, index), newItem, ...arr.slice(index)
  ]
  const choices = insert(question.incorrect_answers, randomIndex, question.correct_answer)

  return (
    <div>
      <h2 className="text-lg mt-3">{decodeHTMLEntities(question.question)}</h2>

      <ul>
        {choices.map((choice, index) => (
          <li key={index} className="block border border-indigo-600 px-2 py-3 mt-3 rounded-lg">
            {decodeHTMLEntities(choice)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
