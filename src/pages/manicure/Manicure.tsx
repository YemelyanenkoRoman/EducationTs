import React, { FC } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import manicureData from './manicureData';
import './Manicure.scss';

const Manicure: FC = () => {
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
