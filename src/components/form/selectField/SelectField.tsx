import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { IOption, Select } from '../../common/Select/Select';
import './SelectField.scss';

interface SelectProps {
  control: Control<any>;
  name: string;
  options: IOption[];
  placeholder?: string;
}

const SelectField: FC<SelectProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div className="selectField">
            <Select
              options={props.options}
              value={field.value}
              onChange={field.onChange}
              placeholder={props.placeholder}
            />
          </div>
        );
      }}
    />
  );
};

export default SelectField;
