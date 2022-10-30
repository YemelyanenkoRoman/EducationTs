import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import { Loader } from '../loader/Loader';

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

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
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
      <label>
        {'title'}
        <Controller
          control={control}
          name="title"
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
        {'visible text'}
        <Controller
          control={control}
          name="visibleText"
          render={({ field, fieldState }) => (
            <div>
              <textarea className="textarea" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
          rules={{
            required: 'Это поле обязательно для ввода',
          }}
        />
      </label>

      <label>
        {'hidden text'}
        <Controller
          control={control}
          name="hiddenText"
          render={({ field, fieldState }) => (
            <div>
              <textarea className="textarea" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <p>{fieldState.error && fieldState.error.message}</p>
            </div>
          )}
          rules={{
            required: 'Это поле обязательно для ввода',
          }}
        />
      </label>

      <label>
        {fields.map((field, index) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={`urls.${index}.url`}
              render={({ field, fieldState }) => (
                <div>
                  <input className="input" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    remove
                  </button>
                  <p>{fieldState.error && fieldState.error.message}</p>
                </div>
              )}
              rules={{
                required: 'Это поле обязательно для ввода',
              }}
            />
          );
        })}
      </label>

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
