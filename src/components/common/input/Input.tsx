import React, { FC } from 'react';
import './input.scss';

interface InputProps {
  fieldState?: boolean | any;
  value: string;
  onChange: (value: any) => void;
}

export const Input: FC<InputProps> = (props) => {
  return (
    <input
      className={props.fieldState.error ? 'input input-false' : 'input input-good'}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
