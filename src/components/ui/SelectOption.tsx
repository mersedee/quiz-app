import React from 'react'
import Select, { SingleValue, ActionMeta } from 'react-select'
import { SelectOptionType } from '@/types'

interface Props {
  value: SelectOptionType | null
  options: SelectOptionType[]
  onChange: (newValue: SingleValue<SelectOptionType>, actionMeta: ActionMeta<SelectOptionType>) => void
}

const SelectOption = ({ value, options, onChange }: Props): JSX.Element => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

export default SelectOption
