import { FC, useState } from 'react'
import { decodeHTMLEntities } from '@/helpers/decodeHTMLEntities'

interface Props {
  choice: string
  currenAnswer: string
  checkAnswer: (arg: string) => void
}

const Option: FC<Props> = ({ choice, checkAnswer, currenAnswer }) => {
  const [color, setColor] = useState('border-indigo-600')

  const onSetColor = (select: string): void => {
    setColor(select === currenAnswer ? 'border-green-600' : 'border-red-600')
    checkAnswer(select)
  }

  return (
    <li
      className={`block border px-2 py-3 mt-3 rounded-lg cursor-pointer ${color}`}
      onClick={() => { onSetColor(choice) }}
    >
      {decodeHTMLEntities(choice)}
    </li>
  )
}

export default Option
