import React, { FC } from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

interface CheckboxProps {
  checked: any;
  value: any;
  onChange: (value: any) => void;
}

export const ReactCheckbox: FC<CheckboxProps> = (props) => {
  return <Checkbox checked={props.checked} value={props.value} onChange={props.onChange} />;
};
