import React, { FC } from 'react';
import ReactDatepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface DatepickerProps {
  showTimeSelect?: boolean | undefined;
  inline?: boolean | undefined;
  value: any;
  onChange: (value: any) => void;
}

export const Datepicker: FC<DatepickerProps> = (props) => {
  return (
    <ReactDatepicker
      inline={props.inline}
      showTimeSelect={props.showTimeSelect}
      selected={props.value}
      onChange={props.onChange}
    />
  );
};
