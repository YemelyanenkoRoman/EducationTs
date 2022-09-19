import React, { FC } from 'react';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import { CardData } from '../../types/types';
import manicureData from './manicureData';
import './Manicure.scss';

interface ManicureProps {
  manicureData: CardData[];
}

const Manicure: FC<ManicureProps> = () => {
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
