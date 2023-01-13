import React from 'react'

interface Props {
  className?: string
}

const Loading = ({ className = '' }: Props): JSX.Element => {
  return (
    <div className={`lds-spinner text-blue-500 inline-block relative w-[80px] h-[80px] ${className}`}>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default Loading
