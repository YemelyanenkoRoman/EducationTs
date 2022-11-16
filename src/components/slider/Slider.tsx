import React, { FC, useState, useEffect } from 'react';
import { DataSliderItem } from '../../types/types';
import BtnSlider from './BtnSlider';
import './Slider.scss';

interface SliderProps {
  autoChange: boolean;
  dataSlider: DataSliderItem[];
}

const Slider: FC<SliderProps> = ({ autoChange, dataSlider }) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  useEffect(() => {
    if (autoChange) {
      let timer = setInterval(() => {
        nextSlide();
      }, 10000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((item, index) => {
        return (
          <div key={item.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={item.url} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
