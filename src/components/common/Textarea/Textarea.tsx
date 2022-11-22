import React, { FC } from 'react';

interface TextareaProps {
  value: string | any;
  onChange: (value: any) => void;
}

export const Textarea: FC<TextareaProps> = (props) => {
  return <textarea className="textarea" value={props.value} onChange={props.onChange} />;
};
