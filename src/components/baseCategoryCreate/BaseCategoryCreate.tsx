import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import { Loader } from '../loader/Loader';
import InputField from '../form/inputField/InputField';
import TextareaField from '../form/textareaField/TextareaField';

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
        onClick={() => {
          append({ url: '' });
        }}
      >
        add label URL
      </button>

      <br />

      <input className="button" type="submit" />
    </form>
  );
};

export default BaseCategoryCreate;
