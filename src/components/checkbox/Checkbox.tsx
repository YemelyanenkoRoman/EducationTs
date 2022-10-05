import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: FC<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <Checkbox
      checked={props.checked}
      onChange={(e) => {
        console.log(e.target.checked);
        props.onChange(e.target.checked);
      }}
    />
  );
};

export default CheckBox;
