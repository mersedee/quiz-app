import React from 'react'

interface Option {
  value: string
  label: string
}

interface SelectOptionProps {
  options: Option[]
  id: string
}

const SelectOption = ({ id, options }: SelectOptionProps): JSX.Element => {
  return (
    <select id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      {options.map(option => (
        <option key={option.value} defaultValue={option.value}>{option.label}</option>
      )
      )}
    </select>
  )
}

export default SelectOption
