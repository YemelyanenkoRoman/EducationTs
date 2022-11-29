import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Textarea } from '../../common';

interface TextareaFieldProps {
  control: Control<any>;
  name: string;
  rules?: Object;
  label?: string;
  onBlur?: any;
}

export const TextareaField: FC<TextareaFieldProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div>
            <label className="label">
              {props.label}
              <Textarea value={field.value} onChange={field.onChange} />
              <div className="error">{!!fieldState.error?.message && fieldState.error.message}</div>
            </label>
          </div>
        );
      }}
      rules={props.rules}
    />
  );
};
