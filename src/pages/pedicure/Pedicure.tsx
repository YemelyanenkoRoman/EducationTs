import React, { FC, useEffect } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { fetchPedicure } from '../../store/slices/pedicureSlice';
import { WithLoading } from '../../components/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../manicure/Manicure.scss';

const Pedicure: FC = () => {
  const dispatch = useAppDispatch();
  const pedicureData = useAppSelector((state) => state.pedicure.card);
  const error = useAppSelector((state) => state.pedicure.error);
  const loading = useAppSelector((state) => state.pedicure.status === 'pending');

  useEffect(() => {
    dispatch(fetchPedicure());
  }, []);

  return (
    <div className="manicure__page">
      <h1 className="manicure__page-title">Педикюр</h1>
      <WithLoading isLoading={loading}>
        <div className="manicure">
          <div className="wrapper">
            {error ? <h2>{error}</h2> : <></>}
            {pedicureData.map((item, index) => {
              return <ServicesCard key={index} cardData={item} />;
            })}
          </div>
        </div>
      </WithLoading>
    </div>
  );
};

export default Pedicure;
