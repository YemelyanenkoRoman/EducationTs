import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import { Loader } from '../loader/Loader';
import { InputField, TextareaField } from '../form';

import './baseCategoryCreate.scss';
import '../../pages/EditCard/EditCard.scss';

export type FormValues = {
  title: string;
  visibleText: string;
  hiddenText: string;
  urls: { url: string }[];
  error?: string;
};

interface BaseCategoryCreateProps {
  onSubmit: (data: FormValues) => Promise<void>;
}

const BaseCategoryCreate: FC<BaseCategoryCreateProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [erronMassage, setErrorMessage] = useState('');

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      title: '',
      visibleText: '',
      hiddenText: '',
      urls: [{ url: '' }],
    },
  });

  // Для динамических форм
  const { fields, append, remove } = useFieldArray<FormValues>({
    control: control,
    name: 'urls',
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      await props.onSubmit(data);
    } catch (error) {
      setErrorMessage('error');
    }
    setIsLoading(false);
  };

  return (
    <div className="base-category">
      <div className="base-category__container">
        <div className="base-category__background">
          <h2>Добавить форму</h2>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {erronMassage ? <h1>{erronMassage}</h1> : <></>}
            {isLoading ? <Loader /> : <></>}

            <InputField
              control={control}
              name="title"
              rules={{
                required: 'Поле обязательно',
                minLength: {
                  message: 'Минимум два символа',
                  value: 2,
                },
              }}
              label="Название карточки"
            />

            <TextareaField control={control} name="visibleText" label="Открытая часть текста" />

            <TextareaField control={control} name="hiddenText" label="Скрытая часть текста" />

            <div className="dynamic-inputs">
              {fields.map((item, index) => {
                return (
                  <div className="dynamic-inputs__container" key={item.id}>
                    <InputField
                      control={control}
                      name={`urls.${index}.url`}
                      rules={{
                        required: 'Поле обязательно',
                      }}
                      label="Введите адрес изображения"
                    />
                    <button
                      className="button-main"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Удалить поле
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              className="button-main"
              onClick={() => {
                append({ url: '' });
              }}
            >
              Добавить поле
            </button>

            <button className="button-main button-main_margin" type="submit">
              Отправить форму
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BaseCategoryCreate;
