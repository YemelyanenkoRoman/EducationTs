import React, { useEffect, useState } from 'react';
import { useForm, useController, UseControllerProps, Controller } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPedicure } from '../../store/slices/pedicureSlice';
import { fetchPodology } from '../../store/slices/podologySlice';
import { fetchManicure } from '../../store/slices/manicureSlice';

import InputField from '../../components/form/inputField/InputField';
import SelectField from '../../components/form/selectField/SelectField';
import DatepickerField from '../../components/form/datepickerField/DatepickerField';
import CheckboxField from '../../components/form/checkboxField/CheckboxField';
import { IOption } from '../../components/common/Select/Select';

import './Appointment.scss';

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

export default function Appointment() {
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
    checkBox: false,
  };

  if (window.history?.state?.usr?.category === 'manicure') {
    defaultValue.manicureOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }

  if (window.history?.state?.usr?.category === 'pedicure') {
    defaultValue.pedicureOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }

  if (window.history?.state?.usr?.category === 'podology') {
    defaultValue.podologyOptions = [{ value: window.history.state.usr.title, label: window.history.state.usr.title }];
  }

  const formData = useForm<FormValues>({
    defaultValues: defaultValue,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    formData.reset();
  };

  return (
    <form className="appointment-form" onSubmit={formData.handleSubmit(onSubmit)}>
      <div className="selects">
        <SelectField
          name={'manicureOptions'}
          control={formData.control}
          options={manicureOptions}
          placeholder={'Маникюр'}
        />
        <SelectField
          name={'pedicureOptions'}
          control={formData.control}
          options={pedicureOptions}
          placeholder={'Педикюр'}
        />
        <SelectField
          name={'podologyOptions'}
          control={formData.control}
          options={podologyOptions}
          placeholder={'Подология'}
        />
      </div>
      <div className="inputs">
        <InputField
          control={formData.control}
          name="firstName"
          rules={{
            required: 'Поле обязательно',
            minLength: {
              message: 'Минимум два символа',
              value: 2,
            },
          }}
          label="Имя пользователя"
        />

        <InputField
          control={formData.control}
          name="surname"
          rules={{
            required: 'Поле обязательно',
            minLength: {
              message: 'Минимум два символа',
              value: 2,
            },
          }}
          label="Фамилия пользователя"
        />

        <InputField
          control={formData.control}
          name="phoneNumber"
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
          label="Номер телефона"
        />

        <InputField
          control={formData.control}
          name="email"
          rules={{
            required: false,
            pattern: {
              value: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
              message: 'Введите электронную почту в верном формате',
            },
          }}
          label="Электронная почта"
        />
      </div>
      <DatepickerField control={formData.control} name="datePicker" showTimeSelect={true} inline={true} />
      <div className="checkBox__container">
        <CheckboxField control={formData.control} name="checkBox" />
        Даю согласие на обработку заполненных мною данных.
      </div>
      <div className="button-main_margin">
        <input className="button-main" type="submit" />
      </div>
    </form>
  );
}
