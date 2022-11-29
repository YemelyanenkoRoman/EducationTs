import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Datepicker } from '../../common';

interface DatepickerFieldProps {
  inline: boolean | undefined;
  showTimeSelect?: boolean | undefined;
  control: Control<any>;
  name: string;
}

export const DatepickerField: FC<DatepickerFieldProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, value } }) => {
        return (
          <Datepicker onChange={onChange} value={value} showTimeSelect={props.showTimeSelect} inline={props.inline} />
        );
      }}
    />
  );
};
