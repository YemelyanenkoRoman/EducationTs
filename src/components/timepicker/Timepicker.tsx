import React, { FC, useState } from 'react';
import ReactTimePicker from 'react-time-picker';

interface DataTimePicker {
  onChange: (time: string | null | Date) => void;
  value: any;
}

const TimePicker: FC<DataTimePicker> = (props: DataTimePicker) => {
  // const [value, onChange] = useState<string>('08:00');
  //  return <ReactTimePicker onChange={(value) => onChange(value.toString())} value={value} />
  return <ReactTimePicker value={props.value} onChange={props.onChange} />;
};

export default TimePicker;
