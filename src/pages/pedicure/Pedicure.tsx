import React, { FC, useEffect } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { loadPedicureData } from '../../store/slices/pedicureSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../manicure/Manicure.scss';

const Pedicure: FC = () => {
  const dispatch = useAppDispatch();
  const pedicureData = useAppSelector((state) => state.pedicure.card);

  useEffect(() => {
    dispatch(loadPedicureData());
  }, []);

  // console.log(pedicureData);
  return (
    <div className="manicure">
      <div className="wrapper">
        <div>
          <h1>Педикюр</h1>
          {pedicureData.map((item, index) => {
            return <ServicesCard key={index} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pedicure;
