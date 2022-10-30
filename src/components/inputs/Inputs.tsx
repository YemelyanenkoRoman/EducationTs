import React, { useEffect, useState } from 'react';
import { useForm, useController, UseControllerProps, Controller } from 'react-hook-form';
import SelectBox, { IOption } from '../selectBox/SelectBox';
import Datepicker from '../datepicker/Datepicker';
import CheckBox from '../checkbox/Checkbox';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPedicure } from '../../store/slices/pedicureSlice';
import { fetchPodology } from '../../store/slices/podologySlice';

import './Inputs.scss';
import { fetchManicure } from '../../store/slices/manicureSlice';

type FormValues = {
  firstName: string;
  surname: string;
  phoneNumber: string;
  email: string;
  manicureOptions: IOption[];
  pedicureOptions: IOption[];
  podologyOptions: IOption[];
  datePicker: Date;
  checkBox: any;
};

export default function Inputs() {
  const dispatch = useAppDispatch();
  const manicureData = useAppSelector((state) => state.manicure.card);
  const pedicureData = useAppSelector((state) => state.pedicure.card);
  const podologyData = useAppSelector((state) => state.podology.card);

  console.log(window.history);

  useEffect(() => {
    dispatch(fetchManicure());
    dispatch(fetchPedicure());
    dispatch(fetchPodology());
  }, []);

  const manicureOptions: IOption[] = manicureData.map((item) => {
    return { value: item.title, label: item.title };
  });

  const pedicureOptions: IOption[] = pedicureData.map((item) => {
    return { value: item.title, label: item.title };
  });

  const podologyOptions: IOption[] = podologyData.map((item) => {
    return { value: item.title, label: item.title };
  });

  const defaultValue: Partial<FormValues> = {
    firstName: '',
    surname: '',
    phoneNumber: '+375',
    email: '',
  };
  //
  if (window.history.state.usr.category === 'manicure') {
    defaultValue.manicureOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }

  if (window.history.state.usr.category === 'pedicure') {
    defaultValue.pedicureOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }

  if (window.history.state.usr.category === 'podology') {
    defaultValue.podologyOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }
  //
  const formData = useForm<FormValues>({
    defaultValues: defaultValue,
  });

  const onSubmit = (data: FormValues) => {
    console.log(formData);
    formData.reset();
  };

  return (
    <form className="form" onSubmit={formData.handleSubmit(onSubmit)}>
      <Controller
        control={formData.control}
        name="manicureOptions"
        render={({ field: { onChange, value } }) => (
          <SelectBox value={value} onChange={onChange} options={manicureOptions} />
        )}
      />

      <Controller
        control={formData.control}
        name="pedicureOptions"
        render={({ field: { onChange, value } }) => (
          <SelectBox value={value} onChange={onChange} options={pedicureOptions} />
        )}
      />

      <Controller
        control={formData.control}
        name="podologyOptions"
        render={({ field: { onChange, value } }) => (
          <SelectBox value={value} onChange={onChange} options={podologyOptions} />
        )}
      />

      <label>
        {'Имя'}
        <Controller
          control={formData.control}
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
          control={formData.control}
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
          control={formData.control}
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
          control={formData.control}
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
        control={formData.control}
        name="datePicker"
        render={({ field: { onChange, value } }) => (
          <Datepicker onChange={onChange} date={value} showTimeSelect={true} />
        )}
      />

      <Controller
        control={formData.control}
        name="checkBox"
        render={({ field: { onChange, value } }) => <CheckBox onChange={onChange} checked={value} />}
        rules={{
          required: true,
        }}
      />

      <input className="button" type="submit" />
    </form>
  );
}
