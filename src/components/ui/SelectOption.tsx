import React from 'react'
import Select, { SingleValue, ActionMeta } from 'react-select'
import { SelectOptionType } from '../../types'

interface SelectOptionProps {
  value: SelectOptionType | null
  options: SelectOptionType[]
  onChange: (newValue: SingleValue<SelectOptionType>, actionMeta: ActionMeta<SelectOptionType>) => void
}

const SelectOption = ({ value, options, onChange }: SelectOptionProps): JSX.Element => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

export default SelectOption
