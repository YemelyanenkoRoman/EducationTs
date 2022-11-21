import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../api/api';
import BaseCategoryCreate, { FormValues } from '../../components/baseCategoryCreate/BaseCategoryCreate';

const CreateCard = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const goHome = () => navigate(`/${params.id}`, { replace: true });

  const onSubmit = async (data: FormValues) => {
    const urls = data.urls.map((item) => {
      return {
        id: uuidv4(),
        url: item.url,
      };
    });

    if (params.id) {
      await api.create({
        category: params.id,
        title: data.title,
        visibleText: data.visibleText,
        hiddenText: data.hiddenText,
        imgDataPath: urls,
      });
    }

    goHome();
  };

  return <BaseCategoryCreate onSubmit={onSubmit} />;
};

export default CreateCard;
