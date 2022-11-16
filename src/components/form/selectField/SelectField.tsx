import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import Select from 'react-select';

export interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  control: Control<any>;
  name: string;
  options: IOption[];
}

const SelectField: FC<SelectProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return <Select options={props.options} value={field.value} onChange={field.onChange} isMulti />;
      }}
    />
  );
};

export default SelectField;
