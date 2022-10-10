import React, { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DataPickerProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
  showTimeSelect?: boolean;
  inline?: boolean;
}

const DatePicker: FC<DataPickerProps> = ({ inline = true, ...rest }: DataPickerProps) => {
  // console.log(inline);
  // const [startDate, setStartDate] = useState<Date>(new Date());
  // const onChange = (date: Date | null) => {
  //   date && setStartDate(date) = но в место стейтев используем пропс.
  // }; - мы используем эту функию из props.

  return (
    <ReactDatePicker
      selected={rest.date}
      onChange={rest.onChange}
      inline={inline}
      showTimeSelect={rest.showTimeSelect}
    />
  );
};

export default DatePicker;

// const [startDate, setStartDate] = useState<Date>(new Date());
// const onChange2 = (date: Date | null) => {
//   date && setStartDate(date);
// } - а это находится в другом файле и передает пропсы!

// const DatePicker2: FC<DataPickerProps> = (props: DataPickerProps) => {
//   const { inline = true, date, ...rest } = props;
//   console.log(inline);
//   return (
//     <ReactDatePicker selected={date} onChange={rest.onChange} inline={inline} showTimeSelect={rest.showTimeSelect} />
//   );
// };
