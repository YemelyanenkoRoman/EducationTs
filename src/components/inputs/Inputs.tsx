import React, { useState } from 'react';
// import * as React from 'react';
import { useForm, useController, UseControllerProps, Controller } from 'react-hook-form';
import SelectBox, { IOption } from '../selectBox/SelectBox';
import Datepicker from '../datepicker/Datepicker';

import './Inputs.scss';

type FormValues = {
  firstName: string;
  surname: string;
  phoneNumber: string;
  email: string;
  options: IOption[];
  datePicker: Date;
};

const options: IOption[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Inputs() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      surname: '',
      phoneNumber: '+375',
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        {'Имя'}
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState }) => (
            <div>
              <input className="input" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
          rules={{
            required: 'Это поле обязательно для ввода',
          }}
        />
      </label>

      <label>
        {'Фамилия'}
        <Controller
          control={control}
          name="surname"
          render={({ field, fieldState }) => (
            <div>
              <input className="input" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
        />
      </label>

      <label>
        {'Номер телефона'}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field, fieldState }) => (
            <div>
              <input className="input" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
          rules={{
            required: 'Это поле обязательно для ввода',
            minLength: {
              value: 13,
              message: 'Минимальное количество чисел в номере с кодом 12',
            },
            maxLength: {
              value: 13,
              message: 'Максимальное количество чисел в номере с кодом 12',
            },
            pattern: {
              value: /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/,
              message: 'Введите номер телефона в верном формате',
            },
          }}
        />
      </label>

      <label>
        {'Электронная почта'}
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <div>
              <input className="input" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
          rules={{
            required: false,
            pattern: {
              value: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
              message: 'Введите электронную почту в верном формате',
            },
          }}
        />
      </label>

      <Controller
        control={control}
        name="options"
        render={({ field: { onChange, value } }) => <SelectBox value={value} onChange={onChange} options={options} />}
      />

      <Controller
        control={control}
        name="datePicker"
        render={({ field: { onChange, value } }) => <Datepicker onChange={onChange} date={value} />}
      />

      <input className="button" type="submit" />
    </form>
  );
}
