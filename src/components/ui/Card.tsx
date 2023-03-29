import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg px-8 py-10 opacity-90 ${className}`}>
      {children}
    </div>
  )
}

export default Card
