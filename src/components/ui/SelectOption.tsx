import { FC } from 'react'
import Select, { Props as SelectProps } from 'react-select'
import { SelectOptionType } from '@/types'

interface Props extends SelectProps<SelectOptionType> {
  value: SelectOptionType | null
}

const SelectOption: FC<Props> = ({
  value,
  options,
  onChange,
  ...rest
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      {...rest}
    />
  )
}

export default SelectOption
