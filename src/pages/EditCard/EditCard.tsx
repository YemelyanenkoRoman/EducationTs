import React, { FC, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormValues } from '../../components/baseCategoryCreate/BaseCategoryCreate';
import { CardData } from '../../types/types';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import InputField from '../../components/form/inputField/InputField';
import TextareaField from '../../components/form/textareaField/TextareaField';

import '../manicure/Manicure.scss';

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
    <>
      {manicureData ? <h2>Edit form</h2> : <h2>Error loading data. Plese restart page</h2>}
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
          label="Имя пользователя"
        />

        <TextareaField control={control} name="visibleText" label="Visible text" />
        <TextareaField control={control} name="hiddenText" label="HiddenText" />

        <div className="dynamic-inputs">
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <InputField
                  control={control}
                  name={`urls.${index}.url`}
                  rules={{
                    required: 'Поле обязательно',
                  }}
                  label="Link Field"
                />
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  remove Link Field
                </button>
              </div>
            );
          })}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            append({ url: '' });
          }}
        >
          add label URL
        </button>

        <button className="button" type="submit" onClick={submit}>
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default ManicureEdit;
