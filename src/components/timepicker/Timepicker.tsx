import React, { FC, useState } from 'react';
import TimePicker from 'react-time-picker';

const Timepicker: FC = () => {
  const [value, onChange] = useState<string>('08:00');

  return (
    <div>
      <TimePicker onChange={(value) => onChange(value.toString())} value={value} />
    </div>
  );
};
export default Timepicker;
