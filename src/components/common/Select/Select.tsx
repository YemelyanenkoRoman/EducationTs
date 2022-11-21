import React, { FC } from 'react';
import ReactSelect from 'react-select';

export interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: IOption[];
  value: string | any;
  onChange: (value: any) => void;
}

export const Select: FC<SelectProps> = (props) => {
  return <ReactSelect options={props.options} value={props.value} onChange={props.onChange} isMulti />;
};
