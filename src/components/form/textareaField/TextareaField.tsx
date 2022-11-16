import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface InputValue {
  control: Control<any>;
  name: string;
  rules?: Object;
  label?: string;
  onBlur?: any;
}

const InputField: FC<InputValue> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div>
            <label className="label">
              {props.label}
              <textarea className="textarea" value={field.value} onChange={field.onChange} />
              <div className="error">{!!fieldState.error?.message && fieldState.error.message}</div>
            </label>
          </div>
        );
      }}
      rules={props.rules}
    />
  );
};
export default InputField;
