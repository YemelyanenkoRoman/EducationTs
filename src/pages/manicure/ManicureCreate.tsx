import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useController, UseControllerProps, Controller, useFieldArray } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import { Loader } from '../../components/loader/Loader';
import BaseCategoryCreate, { FormValues } from '../../components/baseCategoryCreate/BaseCategoryCreate';

const ManicureCreate = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/manicure', { replace: true });

  const onSubmit = async (data: FormValues) => {
    const urls = data.urls.map((item) => {
      return {
        id: uuidv4(),
        url: item.url,
      };
    });

    await api.manicure.add({
      title: data.title,
      visibleText: data.visibleText,
      hiddenText: data.hiddenText,
      imgDataPath: urls,
    });

    goHome();
  };

  return <BaseCategoryCreate onSubmit={onSubmit} />;
};

export default ManicureCreate;
