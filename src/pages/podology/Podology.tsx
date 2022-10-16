import React, { FC, useEffect } from 'react';
import { WithLoading } from '../../components/loader/Loader';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { fetchPodology } from '../../store/slices/podologySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../manicure/Manicure.scss';

const Podology: FC = () => {
  const dispatch = useAppDispatch();
  const podologyData = useAppSelector((state) => state.podology.card);
  const error = useAppSelector((state) => state.podology.error);
  const loading = useAppSelector((state) => state.podology.status === 'pending');

  useEffect(() => {
    dispatch(fetchPodology());
  }, []);

  return (
    <div className="manicure__page">
      <h1 className="manicure__page-title">Подология</h1>
      <WithLoading isLoading={loading}>
        <div className="manicure">
          <div className="wrapper">
            {error ? <h2>{error}</h2> : <></>}
            {podologyData.map((item, index) => {
              return <ServicesCard key={index} cardData={item} />;
            })}
          </div>
        </div>
      </WithLoading>
    </div>
  );
};

export default Podology;
