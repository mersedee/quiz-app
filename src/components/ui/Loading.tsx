import { FC } from 'react'

interface Props {
  className?: string
}

const Loading: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`lds-spinner text-blue-500 inline-block relative w-16 h-16 ${className}`}>
      {[...Array(12)].map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}

export default Loading
