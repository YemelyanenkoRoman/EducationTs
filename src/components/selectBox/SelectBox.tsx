import React, { FC, useState } from 'react';
import Select, { GroupBase } from 'react-select';
import { Props } from 'react-select/dist/declarations/src/Select';

import './selectBox.scss';

export interface IOption {
  value: string;
  label: string;
}

interface ISelectBoxProps {
  options: IOption[];
  onChange: (options: Readonly<IOption[]>) => void;
  value: Readonly<IOption[]>;
}

const SelectBox: FC<ISelectBoxProps> = (props) => {
  return <Select options={props.options} onChange={props.onChange} value={props.value} isMulti />;
};

export default SelectBox;
