import React, { FC } from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

import './ReactCheckbox.scss';

interface CheckboxProps {
  checked: any;
  value: any;
  onChange: (value: any) => void;
}

export const ReactCheckbox: FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      icon={<img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/42-256.png" alt="" />}
      checked={props.checked}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
