import { hover } from '@testing-library/user-event/dist/hover';
import React, { FC } from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

export interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: IOption[];
  value: string | any;
  onChange: (value: any) => void;
  placeholder?: string;
}

export const Select: FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      theme={(theme) => ({
        ...theme,
        borderRadius: 3,
        colors: {
          ...theme.colors,
          primary25: 'rgba(117, 179, 125, 0.5)',
          primary: 'none',
        },
      })}
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      isMulti
    />
  );
};
