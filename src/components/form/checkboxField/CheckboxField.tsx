import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { Control, Controller } from 'react-hook-form';

interface CheckboxProps {
  control: Control<any>;
  name: string;
}

const CheckboxField: FC<CheckboxProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, value } }) => {
        return <Checkbox checked={value} onChange={onChange} />;
      }}
    />
  );
};

export default CheckboxField;
