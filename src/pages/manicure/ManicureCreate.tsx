import React, { useEffect, useState } from 'react';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';

type FormValues = {
  title: string;
  visibleText: string;
  hiddenText: string;
  urls: { url: string }[];
};

const ManicureCreate = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      title: '',
      visibleText: '',
      hiddenText: '',
      urls: [{ url: '' }],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<FormValues>({
    control,
    name: 'urls',
  });

  const onSubmit = (data: FormValues) => {
    const urls = data.urls.map((item) => {
      return {
        id: uuidv4(),
        url: item.url,
      };
    });

    api.manicure.add({
      title: data.title,
      visibleText: data.visibleText,
      hiddenText: data.hiddenText,
      imgDataPath: urls,
    });
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
