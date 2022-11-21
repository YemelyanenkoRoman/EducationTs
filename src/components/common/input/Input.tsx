import React, { FC } from 'react';
import './input.scss';

interface InputProps {
  value: string;
  onChange: (value: any) => void;
}

export const Input: FC<InputProps> = (props) => {
  return <input className="input" value={props.value} onChange={props.onChange} />;
};
