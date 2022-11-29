import React, { FC, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormValues } from '../../components/baseCategoryCreate/BaseCategoryCreate';
import { CardData } from '../../types/types';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { InputField, TextareaField } from '../../components/form';

import '../manicure/Manicure.scss';
import './EditCard.scss';

const ManicureEdit: FC = () => {
  const params = useParams();
  const manicureData = useAppSelector((state) =>
    state[params.category as 'manicure' | 'pedicure' | 'podology'].card.find((element, index) => {
      return element.id == params.id;
    })
  );

  console.log(params.id);
  console.log(params.category);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      title: manicureData?.title,
      visibleText: manicureData?.visibleText,
      hiddenText: manicureData?.hiddenText,
      urls: manicureData?.imgDataPath,
    },
  });

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  const { fields, append, remove } = useFieldArray<FormValues>({
    control: control,
    name: 'urls',
  });

  return (
    <div className="edit-card">
      <div className="edit-card__container">
        <div className="edit-card__background">
          {manicureData ? <h2>Редактировать карточку</h2> : <h2>Error loading data. Plese restart page</h2>}
          <form className={manicureData ? 'form' : 'form-false'}>
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
              onClick={(e) => {
                e.preventDefault();
                append({ url: '' });
              }}
            >
              Добавить поле
            </button>

            <button className="button-main button-main_margin" type="submit" onClick={submit}>
              Отправить форму
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManicureEdit;
