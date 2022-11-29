import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ReactCheckbox } from '../../common';

interface CheckboxFieldProps {
  control: Control<any>;
  name: string;
}

export const CheckboxField: FC<CheckboxFieldProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, value } }) => {
        return <ReactCheckbox checked={value} onChange={onChange} value={value} />;
      }}
    />
  );
};
