import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { IOption, Select } from '../../common/Select/Select';

// import Select from 'react-select';

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
        // return <Select options={props.options} value={field.value} onChange={field.onChange} isMulti />;
        return <Select options={props.options} value={field.value} onChange={field.onChange} />;
      }}
    />
  );
};

export default SelectField;
