import React, { FC, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DataPickerProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePicker: FC<DataPickerProps> = (props: DataPickerProps) => {
  // const [startDate, setStartDate] = useState<Date>(new Date());
  // const onChange = (date: Date | null) => {
  //   date && setStartDate(date) = но в место стейтев используем пропс.
  // }; - мы используем эту функию из props.

  return <ReactDatePicker selected={props.date} onChange={props.onChange} inline />;
};

export default DatePicker;

// const [startDate, setStartDate] = useState<Date>(new Date());
// const onChange2 = (date: Date | null) => {
//   date && setStartDate(date);
// } - а это находится в другом файле и передает пропсы!
