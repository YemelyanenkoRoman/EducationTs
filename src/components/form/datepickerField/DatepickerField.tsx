import React, { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Control, Controller } from 'react-hook-form';

interface DatePickerProps {
  control: Control<any>;
  name: string;

  showTimeSelect?: boolean;
  inline?: boolean;
}

const DatepickerField: FC<DatePickerProps> = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, value } }) => {
        return (
          <ReactDatePicker
            selected={value}
            onChange={onChange}
            showTimeSelect={props.showTimeSelect}
            inline={props.inline}
          />
        );
      }}
    />
  );
};
export default DatepickerField;
