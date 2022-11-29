import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../../common';

import './inputField.scss';

interface InputValue {
  control: Control<any>;
  name: string;
  rules?: Object;
  label?: string;
}

export const InputField: FC<InputValue> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div>
            <label className="label">
              {props.label}
              <Input value={field.value} onChange={field.onChange} fieldState={fieldState} />
              <div className="error">{!!fieldState.error?.message && fieldState.error.message}</div>
            </label>
          </div>
        );
      }}
      rules={props.rules}
    />
  );
};
