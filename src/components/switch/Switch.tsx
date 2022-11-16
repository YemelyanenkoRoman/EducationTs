import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ManualSwitch: FC<SwitchProps> = (props: SwitchProps) => {
  const onChange = () => {
    props.onChange(!props.checked);
  };

  return <Switch checked={props.checked} onChange={onChange} />;
};

export default ManualSwitch;
