import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {}

const Input = ({
  id = 'id',
  type = 'text',
  ...props
}: Props): JSX.Element => {
  return (
    <input
      type={type}
      id={id}
      {...props}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
    />
  )
}

export default Input
