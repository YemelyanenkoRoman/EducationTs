import React, { FC, useEffect } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { loadPodologyData } from '../../store/slices/podologySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../manicure/Manicure.scss';

const Podology: FC = () => {
  const dispatch = useAppDispatch();
  const podologyData = useAppSelector((state) => state.podology.card);

  useEffect(() => {
    dispatch(loadPodologyData());
  }, []);

  return (
    <div className="manicure">
      <div className="wrapper">
        <div>
          <h1>Подология</h1>
          {podologyData.map((item, index) => {
            return <ServicesCard key={index} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Podology;
