import React, { FC } from 'react';
import './Textarea.scss';

interface TextareaProps {
  value: string | any;
  onChange: (value: any) => void;
}

export const Textarea: FC<TextareaProps> = (props) => {
  return <textarea className="textarea" value={props.value} onChange={props.onChange} />;
};
