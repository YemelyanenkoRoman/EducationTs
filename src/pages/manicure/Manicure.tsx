import React, { FC, useEffect } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchManicure } from '../../store/slices/manicureSlice';

import './Manicure.scss';

const Manicure: FC = () => {
  const dispatch = useAppDispatch();
  const manicureData = useAppSelector((state) => state.manicure.card);
  const error = useAppSelector((state) => state.manicure.error);

  useEffect(() => {
    dispatch(fetchManicure());
  }, []);

  return (
    <div className="manicure">
      <div className="wrapper">
        <div>
          <h1>Маникюр</h1>
          {error ? <h2>{error}</h2> : <></>}
          {manicureData.map((item, index) => {
            return <ServicesCard key={index} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Manicure;
