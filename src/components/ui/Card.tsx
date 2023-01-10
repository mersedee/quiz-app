import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps): JSX.Element => {
  return (
    <div className={`bg-white rounded-lg px-8 py-10 opacity-90 ${className}`}>
      {children}
    </div>
  )
}

export default Card
