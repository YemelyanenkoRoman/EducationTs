import React, { FC, useEffect } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { loadManicureData } from '../../store/slices/manicureSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import './Manicure.scss';

const Manicure: FC = () => {
  const dispatch = useAppDispatch();
  const manicureData = useAppSelector((state) => state.manicure.card);

  useEffect(() => {
    dispatch(loadManicureData());
  }, []);

  return (
    <div className="manicure">
      <div className="wrapper">
        <div>
          <h1>Маникюр</h1>
          {manicureData.map((item, index) => {
            return <ServicesCard key={index} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Manicure;
