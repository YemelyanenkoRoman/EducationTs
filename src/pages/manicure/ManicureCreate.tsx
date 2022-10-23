import React, { useEffect, useState } from 'react';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import { Loader } from '../../components/loader/Loader';

type FormValues = {
  title: string;
  visibleText: string;
  hiddenText: string;
  urls: { url: string }[];
  error?: string;
};

const ManicureCreate = () => {
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
    const urls = data.urls.map((item) => {
      return {
        id: uuidv4(),
        url: item.url,
      };
    });

    setIsLoading(true);
    try {
      await api.manicure.add({
        title: data.title,
        visibleText: data.visibleText,
        hiddenText: data.hiddenText,
        imgDataPath: urls,
      });
    } catch (error) {
      setErrorMessage('error');
    }

    // setIsLoading(false);

    // console.log(data);
  };

  // console.log(isLoading);

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

export default ManicureCreate;
