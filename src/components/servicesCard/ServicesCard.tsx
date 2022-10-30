import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../types/types';
import Slaider from '../slider/Slider';
import './ServicesCard.scss';

interface ServicesCardProps {
  cardData: CardData;
  category: string;
}

const ServicesCard: FC<ServicesCardProps> = ({ cardData, category }) => {
  const [isText, setIsText] = useState<boolean>(true);

  const navigate = useNavigate();
  const appointment = () => navigate('/appointment', { replace: true, state: { title: cardData.title, category } });

  return (
    <div className="servicesCard">
      <h2 className="servicesCard__title">{cardData.title}</h2>
      <div className="serviceCarts__boxes">
        <div className="servicesCard__imageBox">
          <div className="servicesCard__slider_width">
            <Slaider autoChange={false} dataSlider={cardData.imgDataPath} />
          </div>
        </div>
        <div className="servicesCard__contentBox">
          <p className="servicesCard__visible-text">{cardData.visibleText}</p>
          <p className={isText ? 'none' : 'text'}>{cardData.hiddenText}</p>
          <span className="servicesCard__buttonsSB">
            <button className="buttonSB" onClick={() => appointment()}>
              Записаться
            </button>
            <button className={isText ? 'buttonSB' : 'none'} onClick={() => setIsText(false)}>
              Читать далее
            </button>
            <button className={isText ? 'none' : 'buttonSB'} onClick={() => setIsText(true)}>
              Закрыть
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
